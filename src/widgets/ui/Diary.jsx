import { useDiaryContext } from "@/context";
import { Entry } from "@/shared";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

export function Diary() {

    const { setIsDiaryOpen, isDiaryOpen, setIsCreateEntryOpen, notes } = useDiaryContext()


    const open_style = isDiaryOpen ? 'opacity-100 visible' : 'opacity-0 invisible'

    return (
        <div className={`w-full h-full absolute bg-neutral-100 rounded-t-3xl shadow-[0_0_8px_0_rgba(34,60,80,0.2)] px-5 py-10 z-100 ${open_style} transition-all duration-300 top-0`}>
            <div className="w-full h-fit flex items-center justify-between border-b-2 border-neutral-400/50 pb-3">
                <span className="sm:text-4xl text-2xl font-medium text-neutral-700">Diary</span>
                <div className="w-fit h-fit flex items-center gap-2">
                    <button onClick={() => {
                        setIsDiaryOpen(false)
                    }} className="w-9 h-9 bg-neutral-800 flex items-center justify-center text-neutral-100 rounded-full cursor-pointer transition-all outline-2 outline-neutral-900/0 outline-offset-1 hover:outline-neutral-900/50"><IoMdArrowRoundBack className="w-5 h-5" /></button>
                    <button onClick={() => {
                        setIsCreateEntryOpen(true)
                    }} className="px-4 py-1.5 bg-neutral-300 rounded-2xl cursor-pointer sm:text-base text-sm font-medium text-neutral-600 border-2 border-neutral-400/50 transition-all hover:text-neutral-800 flex items-center gap-1 "><IoAdd className="scale-120 text-blue-600" />New notes</button>
                </div>
            </div>
            <div className="w-full h-full max-h-160 overflow-hidden relative">
                <ul className="w-full h-full pt-5 flex flex-col items-center gap-5 absolute overflow-y-auto">
                    {
                        notes.map((item, index) => (
                            <Entry key={index} entry={item.text} date={item.date} />
                        ))
                    }
                </ul>
            </div>
        </div >
    );
}