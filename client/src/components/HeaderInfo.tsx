import { FC } from 'react';
import { AddNoteModal } from './NoteItem/components/AddNoteModal';
import { Notebook } from '../store/notebooks/initialState';
import { Note } from '../store/notes/initialState';

interface IHeaderInfoProps {
    activeNotebook: Notebook[];
    activeNotebookTitle: string;
    activeNotebookNotes: Note[];
}

export const HeaderInfo: FC<IHeaderInfoProps> = ({ activeNotebook, activeNotebookTitle, activeNotebookNotes }) => (
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
);
