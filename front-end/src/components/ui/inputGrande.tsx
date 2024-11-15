"use client"

export const InputGrande = () => {


    return (
        <div className="w-full flex gap-6 px-8 py-6 bg-sand-100">
            <div className='flex-1'>
                <div
                    className='min-h-14 outline-none text-lg text-sand-1500 empty:before:text-sand-1000 empty:before:content-[attr(data-placeholder)] break-words whitespace-normal overflow-hidden'
                    contentEditable
                    role='textbox'
                    data-placeholder="Descrição"
                >
                </div>
            </div>
        </div>
    );
}