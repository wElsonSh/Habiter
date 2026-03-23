import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
export function Calendar_day({ day, date, complete, failed }) {

    const newDate = new Date()
        , todayDate = newDate.getDate()


    const color_res = complete == 0 && failed == 0 ? "bg-neutral-500/50" : complete == 0 && failed != 0 ? "bg-red-600/80" : complete != 0 && failed == 0 ? 'bg-green-600/80' : complete > failed ? 'bg-green-300' : complete < failed ? 'bg-red-300' : 'bg-yellow-300'

    const text_res = complete == 0 && failed == 0 ? 'text-neutral-100' : complete == 0 && failed != 0 ? "text-neutral-100" : complete != 0 && failed == 0 ? 'text-neutral-100' : complete > failed ? 'text-green-600' : complete < failed ? 'text-red-600' : 'text-yellow-600'

    const today_style = todayDate == date ? 'border-2 border-green-600' : ''



    return (
        <li className="w-1/7 h-full flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-all">
            <span className="text-sm font-medium text-neutral-600/50">{day}</span>
            <div className={`w-full h-25 bg-neutral-100 rounded-2xl overflow-hidden shadow-[0_0_8px_0_rgba(34,60,80,0.2)] ${today_style}`}>
                <div className={`w-full h-8 ${color_res} flex items-center justify-center sm:text-base text-[0.9em] ${text_res} font-medium`}>{date}</div>
                <div className="w-auto h-full py-2 flex flex-col items-center">
                    <div className="flex items-center gap-0.5"><IoClose className="text-red-600 text-lg" /><span className="text-neutral-700/50 sm:text-base text-[0.8em]">{complete == 0 && failed == 0 ? '-' : failed}</span></div>
                    <div className="flex items-center gap-1"><FaCheck className="text-green-600 text-sm" /><span className="text-neutral-700/50 sm:text-base text-[0.8em]">{complete == 0 && failed == 0 ? '-' : complete}</span></div>
                </div>
            </div>
        </li>
    );
}