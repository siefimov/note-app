import { FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeActiveNotebook } from '../../store/notebooks/notebook.slice';
import { Notebook } from '../../store/notebooks/initialState';
import { GrEdit, GrFormTrash } from 'react-icons/gr';
import { editNotebookTitle, deleteNotebook, getAllNotebooks } from '../../store/notebooks/notebook.actions';

interface INotebookItemProps {
    _id: number | null;
    isActive: boolean;
    title: string;
    notebook: Notebook;
}

export const NotebookItem: FC<INotebookItemProps> = (props) => {
    const { _id, isActive, title, notebook } = props;

    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const dispatch = useAppDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [editedNotebookTitle, setEditedNotebookTitle] = useState('');
    const [editedNotebookId, setEditedNotebookId] = useState<number | null>(null);

    const handleStartEdit = (notebook: Notebook, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setIsEditing(true);
        setEditedNotebookId(notebook._id);
        setEditedNotebookTitle(notebook.title);
    };

    const handleSaveEdit = async () => {
        await dispatch(editNotebookTitle({ _id: editedNotebookId, title: editedNotebookTitle, isActive: true }));
        dispatch(getAllNotebooks());
        setIsEditing(false);
        setEditedNotebookId(null);
        setEditedNotebookTitle('');
    };

    const handleClickDelete = async (notebookId: number | null) => {
        if (notebookId !== null) {
            const response = await dispatch(deleteNotebook(notebookId));
            if (response) {
                dispatch(getAllNotebooks());
            }
        }
    };

    const [features, setFeatures] = useState<boolean>(false);
    const handleOnMouseOver = (isActive: boolean) => {
        setFeatures(isActive);
    };

    const handleOnMouseLeave = (isActive: boolean) => {
        setFeatures(isActive);
    };

    const handleIsNotebookActive = (notebookId: number | null) => {
        if (isEditing) return;
        dispatch(changeActiveNotebook(notebookId));
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <li
            key={_id}
            onClick={() => handleIsNotebookActive(notebook._id)}
            onMouseOver={() => handleOnMouseOver(true)}
            onMouseLeave={() => handleOnMouseLeave(false)}
            className={` flex justify-between my-4 p-2 rounded cursor-pointer border border-slate-400 z-0 ${
                isActive ? 'bg-[#819ef3] hover:bg-[#819ef3]' : 'hover:bg-slate-200'
            }`}
        >
            {isEditing && isActive ? (
                <input
                    type='text'
                    value={editedNotebookTitle}
                    onChange={(e) => setEditedNotebookTitle(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            handleSaveEdit();
                        }
                    }}
                    ref={inputRef}
                    className='bg-[#819ef3] outline-none text-red-500'
                />
            ) : (
                <h3 className='text-base z-0'>{title}</h3>
            )}

            {features && isActive && (
                <div className='flex'>
                    <span
                        onClick={(e) => handleStartEdit(notebook, e)}
                        className='rounded-full p-1 bg-slate-200 mr-2 z-100'
                    >
                        <GrEdit />
                    </span>
                    <span onClick={() => handleClickDelete(notebook._id)} className='rounded-full p-1 bg-slate-200'>
                        <GrFormTrash />
                    </span>
                </div>
            )}
        </li>
    );
};
