import { createContext, useContext, useEffect, useState } from "react";

const DiaryContext = createContext()
export function DiaryPovider({ children }) {

    const [isDiaryOpen, setIsDiaryOpen] = useState(false)

    const [isCreateEntryOpen, setIsCreateEntryOpen] = useState(false)


    const [notes, setNotes] = useState([])
    const [db, setDb] = useState(null)

    useEffect(() => {
        const request = indexedDB.open('MyDb', 1);

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('notes')) {
                db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (e) => {
            const database = e.target.result;
            setDb(database);

            const transaction = database.transaction(['notes'], 'readonly');
            const store = transaction.objectStore('notes');
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = () => {
                const dbNotes = getAllRequest.result;
                if (dbNotes.length > 0) {
                    setNotes(dbNotes);
                }
            };
        };
    }, []);

    const addNote = (text) => {
        if (!db) return;

        const transaction = db.transaction(['notes'], 'readwrite');
        const store = transaction.objectStore('notes');

        store.add({ text, date: new Date().toISOString() });

        transaction.oncomplete = () => {
            loadNotes(); // перезагружаем список
        };
    };
    const loadNotes = () => {
        if (!db) return;

        const transaction = db.transaction(['notes'], 'readonly');
        const store = transaction.objectStore('notes');
        const request = store.getAll();

        request.onsuccess = () => {
            setNotes(request.result);
        };
    };

    const value = {
        isDiaryOpen,
        setIsDiaryOpen,
        setIsCreateEntryOpen,
        isCreateEntryOpen,
        addNote,
        notes,
    }
    return (
        <DiaryContext.Provider value={value}>
            {children}
        </DiaryContext.Provider>
    );
}

export const useDiaryContext = () => useContext(DiaryContext)