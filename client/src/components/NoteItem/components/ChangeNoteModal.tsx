import { FC } from 'react';
import { IChangeNoteModalProps } from './types';

export const ChangeNoteModal: FC<IChangeNoteModalProps> = (props) => {
    const { title, description, onTitleChange, onDescriptionChange, onCloseClick, onSaveClick } = props;

    return (
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
                                value={title}
                                onChange={onTitleChange}
                            />
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
                                value={description}
                                onChange={onDescriptionChange}
                            ></textarea>
                        </div>
                        {/*footer*/}
                        <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                            <button
                                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                type='button'
                                onClick={onCloseClick}
                            >
                                Close
                            </button>
                            <button
                                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                type='button'
                                onClick={onSaveClick}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
    );
};
