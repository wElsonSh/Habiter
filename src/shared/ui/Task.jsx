import { useHabitContext } from "@/context";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export function Task({ task, complete_row, failed_row, isComplete }) {

    const { handleCompleteHabit, handleDeleteHabit } = useHabitContext()

    const HandleClickComplete = () => {
        handleCompleteHabit(task)
    }
    const complete_style = isComplete ? 'bg-green-600 border-green-200/50 pointer-events-none' : ' border-neutral-400/50'
        , complete_btn_style = isComplete ? 'opacity-100' : 'opacity-0'

    const feedbackPhrases = {
        positive: [
            "Keep it up!",
            "Way to go!",
            "You're doing great!",
            "Keep going!",
            "Nice work!",
            "You've got this!",
            "Well done!",
            "Stay strong!",
            "That's the spirit!",
            "Keep crushing it!"
        ],
        negative: [
            "You can do better!",
            "Step it up!",
            "Not good enough!",
            "Try harder!",
            "Push yourself!",
            "Pick up the pace!",
            "Focus up!",
            "Come on, step up!",
            "No excuses!",
            "Get it together!"
        ]
    };

    const random_phrases = Math.floor(Math.random() * 10);
    // const complete_style = isComplete ? 'bg-green-600 border-green-100/50' : 'border-neutral-400'

    return (
        <li className="w-full h-fit bg-transparent flex flex-col gap-1">
            <div className="w-full h-fit flex items-center justify-between gap-4">
                <button onClick={HandleClickComplete} className={`w-8 h-8 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-center ${complete_style}`}>
                    <FaCheck className={`text-neutral-100/80 transition-all ${complete_btn_style}`} />
                </button>
                <span className="text-xl font-medium sm:w-100 w-60 overflow-hidden">{task}</span>
                <button onClick={() => {
                    handleDeleteHabit(task)
                }} className="w-fit h-fit cursor-pointer transition-all text-neutral-500 hover:text-neutral-600">
                    <MdDelete className="w-8 h-8" />
                </button>
            </div>
            <div className="w-full h-fit flex items-center gap-1 pl-12 text-base">
                <FaCheck className="text-green-600" />
                <span className="text-neutral-400">{complete_row} and </span><IoClose className="ml-2 scale-130 text-red-600" />
                <span className="text-neutral-400">{failed_row} in a row. {complete_row == failed_row ? feedbackPhrases.positive[random_phrases] : complete_row > failed_row ? feedbackPhrases.positive[random_phrases] : feedbackPhrases.negative[random_phrases]}</span>
            </div>
        </li>
    );
}