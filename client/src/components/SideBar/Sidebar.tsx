import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Logo } from './Logo';
import { SidebarHeader } from './SidebarHeader';
import { NotebookList } from './NotebookList';

import { getAllNotebooks, addNotebook } from '../../store/notebooks/notebookThunks';
import { getNotes } from '../../store/notes/noteThunks';

export const SideBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
    const [newNotebook, setNewNotebook] = useState<string>('');

    const notebooks = useAppSelector((state) => state.notebooks.list);

    const handleClick = () => {
        setIsInputVisible((isInputVisible) => !isInputVisible);
    };

    const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            await dispatch(addNotebook(newNotebook));
            dispatch(getAllNotebooks());

            setNewNotebook('');
            setIsInputVisible(false);
        }
    };

    useEffect(() => {
        if (isInputVisible) {
            inputRef.current?.focus();
        }
    }, [isInputVisible]);

    useEffect(() => {
        dispatch(getAllNotebooks());
        dispatch(getNotes());
    }, [dispatch]);

    return (
        <div className='flex flex-col basis-[20%] w-[100%] p-6 bg-slate-200 min-h-[100vh]'>
            <Logo />
            <SidebarHeader onClick={handleClick} />
            {notebooks && <NotebookList />}
            {isInputVisible && (
                <input
                    ref={inputRef}
                    type='text'
                    value={newNotebook}
                    onChange={(e) => setNewNotebook(e.target.value)}
                    onKeyUp={handleKeyUp}
                    className='border p-2 rounded outline-none'
                />
            )}
        </div>
    );
};
