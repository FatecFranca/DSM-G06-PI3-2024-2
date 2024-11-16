"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type PreviewImage = {
    id: string;
    url: string;
    file: File; // Adicionado para armazenar o arquivo original
};

type ImageUploadProps = {
    onImagesChange: (files: File[]) => void;
};

export const ImageUpload = ({ onImagesChange }: ImageUploadProps) => {
    const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);

    const handleFileUpload = (files: FileList | null) => {
        if (!files) return;
    
        const newImages = Array.from(files)
            .slice(0, 5 - previewImages.length)
            .map(file => ({
                id: crypto.randomUUID(),
                url: URL.createObjectURL(file),
                file,
            }));
    
        const updatedImages = [...previewImages, ...newImages];
        setPreviewImages(updatedImages);
        // Atualiza as imagens no componente pai fora do `setState`
        onImagesChange(updatedImages.map(image => image.file));
    };
    

    

    const removeImage = (id: string) => {
        const updatedImages = previewImages.filter(image => image.id !== id);
        setPreviewImages(updatedImages);
        // Atualiza as imagens no componente pai fora do `setState`
        onImagesChange(updatedImages.map(image => image.file));
    };
    

    return (
        <div className="flex flex-col items-center w-full">
            <label className="w-full flex items-center justify-center aspect-square bg-sand-300 rounded-lg cursor-pointer text-sand-600 hover:bg-sand-400 transition-all border-2 border-dashed border-sand-600">
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={e => handleFileUpload(e.target.files)}
                />
                <FontAwesomeIcon icon={faCloudUploadAlt} className="text-5xl" />
            </label>

            {/* Preview Images */}
            <div className="w-full mt-4 grid grid-cols-5 gap-2">
                {previewImages.map(image => (
                    <div key={image.id} className="relative aspect-square">
                        <img
                            src={image.url}
                            alt="Preview"
                            className="w-full object-cover aspect-square rounded-md"
                        />
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            className="absolute -top-2 -right-2 text-red-600 text-lg cursor-pointer"
                            onClick={() => removeImage(image.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
