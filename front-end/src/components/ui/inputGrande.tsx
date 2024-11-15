"use client"

export const InputGrande = () => {


    return (
        <div className="w-full flex gap-6 px-6 py-6 bg-sand-400  rounded-lg">
            <div className='flex-1 w-full'>
                <div
                    className='
                        w-full
                        text-sm
                        min-h-14 outline-none
                        font-semibold 
                        text-sand-1500
                        empty:before:text-sand-1000
                        empty:before:content-[attr(data-placeholder)]
                        break-words whitespace-normal overflow-hidden'
                    contentEditable
                    role='textbox'
                    data-placeholder="Descrição"
                >
                </div>
            </div>
        </div>
    );
}