
import { useHabitContext } from "@/context";
import { Calendar_day } from "@/shared";
import { RiSettings4Fill } from "react-icons/ri";
export function Calendar({ year, month }) {
    const { getDateOfWeekday, dailyStatistics, setIsRoflOpen } = useHabitContext()

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    console.log(dailyStatistics[0].completed);


    const presentMonth = months[month]

    return (
        <header className="w-full h-[15rem] sm:py-10 py-5 sm:px-5 px-2">
            <div className="w-full h-auto border-b-2 border-neutral-400/50 flex items-center justify-between">
                <span className="text-2xl text-neutral-500/50 font-semibold">{presentMonth} {year}</span>
                <button onClick={() => {
                    setIsRoflOpen(true)
                }} className="text-neutral-500/50 scale-150 hover:text-neutral-500 transition-all cursor-pointer"><RiSettings4Fill /></button>
            </div>
            <ul className="w-full sm:h-35 h-[10em] flex items-center sm:gap-2 gap-[4px]">
                <Calendar_day day={'Mon'} date={getDateOfWeekday(0)} complete={dailyStatistics[0].completed} failed={dailyStatistics[0].faild} />
                <Calendar_day day={'Tus'} date={getDateOfWeekday(1)} complete={dailyStatistics[1].completed} failed={dailyStatistics[1].faild} />
                <Calendar_day day={'Wed'} date={getDateOfWeekday(2)} complete={dailyStatistics[2].completed} failed={dailyStatistics[2].faild} />
                <Calendar_day day={'Thu'} date={getDateOfWeekday(3)} complete={dailyStatistics[3].completed} failed={dailyStatistics[3].faild} />
                <Calendar_day day={'Fri'} date={getDateOfWeekday(4)} complete={dailyStatistics[4].completed} failed={dailyStatistics[4].faild} />
                <Calendar_day day={'Sat'} date={getDateOfWeekday(5)} complete={dailyStatistics[5].completed} failed={dailyStatistics[5].faild} />
                <Calendar_day day={'Sun'} date={getDateOfWeekday(6)} complete={dailyStatistics[6].completed} failed={dailyStatistics[6].faild} />
            </ul>
        </header>
    );
}