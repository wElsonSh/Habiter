import { useHabitContext } from "@/context";
import { Task } from "@/shared";
import { IoAdd } from "react-icons/io5";
export function TasksContainer() {

    const { isCreateHabitOpen, setIsCreateHabitOpen, habitArr } = useHabitContext()

    return (
        <main className="w-full h-full flex container mx-auto flex-col items-center bg-neutral-100 rounded-t-3xl shadow-[0_0_8px_0_rgba(34,60,80,0.2)] px-5 py-10">
            <div className="w-full h-fit flex items-center justify-between border-b-2 border-neutral-400/50 pb-3">
                <span className="sm:text-4xl text-2xl font-medium text-neutral-700">To-Do Today</span>
                <button onClick={() => {
                    setIsCreateHabitOpen(!isCreateHabitOpen)
                }} className="px-4 py-1.5 bg-neutral-300 rounded-2xl cursor-pointer sm:text-base text-sm font-medium text-neutral-600 border-2 border-neutral-400/50 transition-all hover:text-neutral-800 flex items-center gap-1 "><IoAdd className="scale-120 text-blue-600" />New habit</button>
            </div>
            <div className="w-full h-full max-h-160 overflow-hidden relative">
                <ul className="w-full h-full pt-5 flex flex-col items-center gap-5 absolute overflow-y-auto">
                    {
                        habitArr.map((item, index) => (
                            <Task key={index} task={item.habit} isComplete={item.isComplete} complete_row={item.rowComplete} failed_row={item.rowFaild} />
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}