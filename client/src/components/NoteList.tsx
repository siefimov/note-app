import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';

import Clock from '../helper/Clock';
import { NoteItem } from './NoteItem/NoteItem';
import { NoteTableView } from './NoteTableView/NoteTableView';
import ToggleViewButton from './ToggleViewButton';

import { AddNoteModal } from './NoteItem/components/AddNoteModal';

export const NoteList: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.data);
    const notebooks = useAppSelector((state) => state.notebooks.list);
    const activeNotebook = notebooks.filter((notebook) => notebook.isActive === true);
    const [isTableView, setIsTableView] = useState(false);

    const activeNotebookNotes = notes.filter((note) => note.notebookId === activeNotebook[0]?._id);
    const [activeNotebookTitle, setActiveNotebookTitle] = useState('');

    const handleListClick = () => {
        setIsTableView(!isTableView);
    };

    useEffect(() => {
        setActiveNotebookTitle(activeNotebook[0]?.title);
    }, [activeNotebook, notebooks, notes]);

    return (
        <div className=' basis-[80%] w-[100%] p-6'>
            <Clock />
            <div className='flex justify-between mb-6 border-b-2 pb-2'>
                <div className='flex flex-col'>
                    <h3 className='text-teal-600 font-bold uppercase transition-all duration-150'>
                        <span className='lowercase text-slate-700 font-thin'>Selected Notebook: </span>
                        {activeNotebook.length > 0 ? (
                            activeNotebookTitle
                        ) : (
                            <span className='text-red-500 lowercase font-normal'>No selected Notebook</span>
                        )}
                    </h3>
                    <p className='text-slate-700 font-thin'>
                        notes in notebook: <span className='text-teal-600 font-bold'>{activeNotebookNotes.length}</span>
                    </p>
                </div>
                <div>
                    <AddNoteModal notebookId={activeNotebook[0]?._id} />
                </div>
            </div>
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
