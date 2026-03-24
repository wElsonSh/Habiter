import { CreateEntryWindow, CreateHabitWindow, Rofl, TasksContainer } from "@/widgets";
import { Calendar } from "../widgets/ui/Calendar";

export function App() {

  // const open_style = isCreateHabitOpen ? ''

  // context
  const newDate = new Date()
    , newYear = newDate.getFullYear()
    , newMonth = newDate.getMonth()
  // context

  return (
    <div className="w-full h-screen bg-neutral-300 flex flex-col transition-all">
      <CreateHabitWindow />
      <CreateEntryWindow />
      <Calendar year={newYear} month={newMonth} />
      <TasksContainer />
      <Rofl />
    </div>
  );
}