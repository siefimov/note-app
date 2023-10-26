import { useState } from 'react';
import { GrEdit, GrFormTrash } from 'react-icons/gr';
import { useAppDispatch } from '../../store/hooks';
import { deleteNote, updateNote } from '../../store/notes/note.slice';

import { ChangeNoteModal } from './components/ChangeNoteModal';
import { INoteItemProps, updatedNoteType } from './types';

export const NoteItem: React.FunctionComponent<INoteItemProps> = ({ title, description, createdAt, id }) => {
    const [note, setNote] = useState<updatedNoteType>({ title: title, description: description, updatedAt: '' });
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();

    const handleRemoveNote = () => {
        dispatch(deleteNote(id));
    };

    const handleSaveNote = () => {
        dispatch(
            updateNote({
                id: id,
                title: note.title,
                description: note.description,
                updatedAt: new Date().toISOString(),
            })
        );

        setShowModal(false);
    };

    return (
        <>
            <div
                onClick={() => setShowModal(true)}
                className='flex flex-col w-[280px] h-[200px] rounded-lg cursor-pointer bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.17),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'
            >
                <h3 className='text-2xl mb-4 truncate'>{title}</h3>
                <p className='mb-6 flex-1 text-slate-700 line-clamp-3'>{description}</p>
                <div className='flex justify-between items-center'>
                    <span className='text-xs'>{createdAt}</span>
                    <div className='flex items-center'>
                        <span
                            onClick={() => setShowModal(true)}
                            className='hover:bg-red-200 hover:rounded-full p-2 border border-slate-300 rounded-full'
                        >
                            <GrEdit />
                        </span>
                        <span
                            onClick={handleRemoveNote}
                            className=' hover:bg-red-200 hover:rounded-full p-2 border border-slate-300 rounded-full'
                        >
                            <GrFormTrash />
                        </span>
                    </div>
                </div>
            </div>

            {showModal && (
                <ChangeNoteModal
                    title={note.title}
                    description={note.description}
                    onTitleChange={(e) => setNote({ ...note, title: e.target.value })}
                    onDescriptionChange={(e) => setNote({ ...note, description: e.target.value })}
                    onCloseClick={() => setShowModal(false)}
                    onSaveClick={() => handleSaveNote()}
                />
            )}
        </>
    );
};
