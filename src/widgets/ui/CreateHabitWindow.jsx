import { useHabitContext } from "@/context";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function CreateHabitWindow() {

    const { isCreateHabitOpen, setIsCreateHabitOpen, handleCreateHabit } = useHabitContext()

    const open_style = isCreateHabitOpen ? 'opacity-100 visible' : 'opacity-0 invisible'

    const [inputValue, setInputValue] = useState('')

    const onEnterInput = (event) => {
        if (event.key === 'Enter') {
            handleCreateHabit(inputValue)
            setInputValue('')
            setIsCreateHabitOpen(false)
        }
    }

    return (
        <div className={`w-full h-screen absolute z-10 bg-neutral-400/50 flex items-center justify-center transition-all duration-300 ${open_style} backdrop-blur-md px-5`}>
            <div className="sm:w-100 w-full h-fit bg-neutral-100 shadow-[0_0_8px_0_rgba(34,60,80,0.2)] rounded-3xl px-5 py-10 flex flex-col gap-3">
                <div className="w-full h-fit flex items-center justify-between">
                    <span className="text-2xl font-medium text-neutral-500">Creating habit.</span>
                    <button onClick={() => {
                        setIsCreateHabitOpen()
                    }} className="scale-150 px-2 cursor-pointer hover:text-neutral-700 text-neutral-500 transition-all"><IoClose /></button>
                </div>
                <input className="w-full h-fit px-5 py-3 bg-neutral-300 rounded-2xl border-2 focus:border-neutral-500 border-neutral-400/50 " type="text" placeholder="Enter habit:" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={onEnterInput} />
            </div>
        </div>
    );
} 