import { createContext, useContext, useEffect, useState } from "react";

const HabitContext = createContext()

export function HabitProvider({ children }) {

    function getDateOfWeekday(weekday) {
        const today = new Date();
        const currentDayOfWeek = (today.getDay() + 6) % 7;
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + (weekday - currentDayOfWeek));
        return targetDate.getDate();
    }

    const presentDate = new Date()
        , presentDay = presentDate.getDate()


    const [isCreateHabitOpen, setIsCreateHabitOpen] = useState(false)

    const [habitArr, setHabitArr] = useState(JSON.parse(localStorage.getItem('habits')) || [])

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habitArr))
    }, [habitArr])

    const [dailyStatistics, setDailyStatistics] = useState(JSON.parse(localStorage.getItem('daily_statistics')) || [
        {
            date: getDateOfWeekday(0),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(1),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(2),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(3),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(4),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(5),
            completed: 0,
            faild: 0
        },
        {
            date: getDateOfWeekday(6),
            completed: 0,
            faild: 0
        },
    ])

    useEffect(() => {
        localStorage.setItem('daily_statistics', JSON.stringify(dailyStatistics))
    }, [dailyStatistics])

    const incrementCompleted = (itemsArr) => {
        const updateArr = itemsArr.map(item => {

            if (item.date == presentDay) {
                return {
                    ...item,
                    completed: item.completed + 1
                }
            }
            return item
        })
        return updateArr

    }

    const incrementFaild = (itemsArr) => {
        const updateArr = itemsArr.map(item => {

            if (item.date == presentDay) {
                return {
                    ...item,
                    faild: item.faild + 1
                }
            }
            return item
        })
        return updateArr

    }

    const handleCreateHabit = (habit) => {
        const newElement = habit.trim()
        if (!habitArr.some(item => item.habit == newElement)) {
            setHabitArr(item => [...item, {
                habit: newElement,
                isComplete: false,
                rowComplete: 0,
                rowFaild: 0
            }])
        } else {
            alert('akjsbdjhas')
        }

    }

    const handleCompleteHabit = (habit) => {
        const habitIndex = habitArr.findIndex(item => item.habit == habit)
        setHabitArr(item => {
            const prevItem = [...item]
            prevItem[habitIndex].isComplete = true
            prevItem[habitIndex].rowComplete += 1
            return prevItem
        })
        setDailyStatistics(prevItem => incrementCompleted(prevItem))
        console.log(dailyStatistics);


    }

    useEffect(() => {
        const dayliResetComplete = setInterval(() => {
            const newDate = new Date()

            if (presentDay != newDate.getDate()) {
                habitArr.forEach(item => {
                    if (item.isComplete == false) {
                        setHabitArr(prevItem => prevItem.map(item => ({
                            ...item,
                            rowFaild: item.rowFaild += 1
                        })))
                        setHabitArr(item => item.map(item => ({
                            ...item,
                            isComplete: false
                        })))
                        setDailyStatistics(item => incrementFaild(item))

                    } else {
                        setHabitArr(prevItem => prevItem.map(item => ({
                            ...item,
                            isComplete: false
                        })))

                    }
                });
            }

        }, 1000);

        return () => clearInterval(dayliResetComplete);
    }, []);
    const handleDeleteHabit = (habit) => {
        setHabitArr(item => {
            const prevItem = [...item]
            const newItem = prevItem.filter(item => item.habit != habit)
            return newItem
        })
    }

    const [isRoflOpen, setIsRoflOpen] = useState(false)



    const value = {
        isCreateHabitOpen,
        setIsCreateHabitOpen,
        habitArr,
        handleCreateHabit,
        handleCompleteHabit,
        handleDeleteHabit,
        getDateOfWeekday,
        dailyStatistics,
        isRoflOpen,
        setIsRoflOpen,
    }

    return (
        <HabitContext.Provider value={value}>
            {children}
        </HabitContext.Provider>
    );
}

export const useHabitContext = () => useContext(HabitContext)