import { useState } from 'react';
import { useAppSelector } from '../store/hooks';

import { NoteItem } from './NoteItem/NoteItem';
import { NoteTableView } from './NoteTableView/NoteTableView';
import ToggleViewButton from './ToggleViewButton';

export const NoteList: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.data);
    const notebooks = useAppSelector((state) => state.notebooks.list);
    const activeNotebook = notebooks.filter((notebook) => notebook.isActive === true);

    const [isTableView, setIsTableView] = useState(false);

    const activeNotebookNotes = notes.filter((note) => note.notebookId === activeNotebook[0]?._id);

    const handleListClick = () => {
        setIsTableView(!isTableView);
    };

    return (
        <div className=' basis-[80%] w-[100%] p-6'>
            <ToggleViewButton isTableView={isTableView} handleListClick={handleListClick} />

            {isTableView && <NoteTableView />}

            <div className='flex gap-3 flex-wrap transition-all duration-500'>
                {!isTableView &&
                    activeNotebookNotes.map((note) => (
                        <NoteItem
                            key={note._id}
                            title={note.title}
                            description={note.description}
                            createdAt={note.createdAt.split('T')[0]}
                            _id={note._id}
                        />
                    ))}
            </div>
        </div>
    );
};
