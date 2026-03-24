import { useDiaryContext } from "@/context";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function CreateEntryWindow() {

    const { isCreateEntryOpen, setIsCreateEntryOpen, addNote } = useDiaryContext()

    const open_style = isCreateEntryOpen ? 'opacity-100 visible' : 'opacity-0 invisible'

    const [inputValue, setInputValue] = useState('')

    const onEnterInput = (event) => {
        if (event.key === 'Enter') {
            addNote(inputValue)
            setInputValue('')
            setIsCreateEntryOpen(false)
        }
    }

    return (
        <div className={`w-full h-screen absolute z-150 bg-neutral-400/50 flex items-center justify-center transition-all duration-300 backdrop-blur-md px-5 ${open_style}`}>

            <div className="sm:w-100 w-full h-fit bg-neutral-100 shadow-[0_0_8px_0_rgba(34,60,80,0.2)] rounded-3xl px-5 py-10 flex flex-col gap-3">
                <div className="w-full h-fit flex items-center justify-between">
                    <span className="text-2xl font-medium text-neutral-500">Creating notes.</span>
                    <button onClick={() => {
                        setIsCreateEntryOpen(false)
                    }} className="scale-150 px-2 cursor-pointer hover:text-neutral-700 text-neutral-500 transition-all"><IoClose /></button>
                </div>
                <input className="w-full h-fit px-5 py-3 bg-neutral-300 rounded-2xl border-2 focus:border-neutral-500 border-neutral-400/50 " type="text" placeholder="Enter notes:" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={onEnterInput} />
            </div>
        </div>
    );
}