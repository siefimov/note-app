import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { addNote } from '../../../store/notes/noteThunks';
import { newNoteType, IAddNoteNodalProps } from './types';

export const AddNoteModal: React.FC<IAddNoteNodalProps> = (props) => {
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState<newNoteType>({ title: '', description: '' });

    const notebooks = useAppSelector((state) => state.notebooks.list);
    const activeNotebook = notebooks.find((notebook) => notebook.isActive === true);

    const dispatch = useAppDispatch();

    const handleSaveNote = () => {
        dispatch(
            addNote({
                title: note.title,
                description: note.description,
                notebookId: props.notebookId,
                isActive: false,
                createdAt: new Date().toISOString(),
                updatedAt: '',
            })
        );

        setNote({ title: '', description: '' });

        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            inputRef.current?.focus();
        }
    }, [showModal]);

    return (
        <>
            <button
                className=' bg-[#e3c134] text-white active:bg-[#b99d2c] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none disabled:opacity-30 mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setShowModal(true)}
                disabled={activeNotebook ? false : true}
            >
                Add Note
            </button>
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                                    {/* Input for Note title */}
                                    <input
                                        type='text'
                                        placeholder='Untitled'
                                        className='outline-none text-xl'
                                        value={note.title}
                                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                                        ref={inputRef}
                                    />

                                    {/* <button
                                        className='p-1 ml-auto bg-transparent text-black text-xl leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='bg-transparent text-slate-500 h-6 w-6 inline-block outline-none focus:outline-none'>
                                            ×
                                        </span>
                                    </button> */}
                                </div>
                                {/*body*/}
                                <div className='relative p-6 flex-auto'>
                                    <textarea
                                        name='description'
                                        id='note-description'
                                        cols={50}
                                        rows={5}
                                        placeholder='Add your note...'
                                        className='outline-none resize-none'
                                        value={note.description}
                                        onChange={(e) => setNote({ ...note, description: e.target.value })}
                                    ></textarea>
                                </div>
                                {/*footer*/}
                                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                    <button
                                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-1 focus:border hover:border mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none focus:bg-emerald-400 mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={handleSaveNote}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </>
    );
};
