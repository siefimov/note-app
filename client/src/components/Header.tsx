import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';

// import Clock from '../helper/Clock';
import { HeaderInfo } from './HeaderInfo';

export const Header: FC = () => {
    const notes = useAppSelector((state) => state.notes.data);
    const notebooks = useAppSelector((state) => state.notebooks.list);
    const activeNotebook = notebooks.filter((notebook) => notebook.isActive === true);

    const activeNotebookNotes = notes.filter((note) => note.notebookId === activeNotebook[0]?._id);
    const [activeNotebookTitle, setActiveNotebookTitle] = useState('');

    useEffect(() => {
        setActiveNotebookTitle(activeNotebook[0]?.title);
    }, [activeNotebook, notebooks, notes]);

    return (
        <>
            {/* <Clock /> */}
            <HeaderInfo
                activeNotebook={activeNotebook}
                activeNotebookNotes={activeNotebookNotes}
                activeNotebookTitle={activeNotebookTitle}
            />
        </>
    );
};
