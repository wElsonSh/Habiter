import { useHabitContext } from "@/context";

export function Rofl() {

    const { isRoflOpen, setIsRoflOpen } = useHabitContext()

    const openStyle = isRoflOpen ? 'opacity-100 visible' : 'opacity-0 invisible'

    return (
        <div onClick={() => { setIsRoflOpen(false) }} className={`${openStyle} w-full h-screen absolute bg-neutral-400/50  backdrop-blur-sm transition-all flex items-center justify-center text-4xl font-bold z-200`}>
            Нет иди нахуй🖕
        </div>
    );
}