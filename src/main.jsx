import { App } from '@/app/App.jsx'
import { createRoot } from 'react-dom/client'
import { DiaryPovider, HabitProvider } from './context'
import './index.css'

createRoot(document.getElementById('root')).render(
  <HabitProvider>
    <DiaryPovider>
      <App />
    </DiaryPovider>
  </HabitProvider>
)
