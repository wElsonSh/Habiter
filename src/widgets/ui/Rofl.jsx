import { useHabitContext } from "@/context";

export function Rofl() {

    const { isRoflOpen, setIsRoflOpen } = useHabitContext()

    const openStyle = isRoflOpen ? 'top-[0vh]' : 'top-[-100vh]'

    return (
        <div onClick={() => { setIsRoflOpen(false) }} className={`${openStyle} w-full h-screen absolute bg-neutral-400/50  backdrop-blur-sm transition-all flex items-center justify-center text-4xl font-bold`}>
            Нет иди нахуй🖕
        </div>
    );
}