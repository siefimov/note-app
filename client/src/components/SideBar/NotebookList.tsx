import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { NotebookItem } from './NotebookItem';

export const NotebookList: FC = () => {
    const notebooks = useAppSelector((state) => state.notebooks.list);
    return (
        <ul className=' rounded'>
            {notebooks.map((notebook) => (
                <NotebookItem
                    key={notebook._id}
                    _id={notebook._id}
                    isActive={notebook.isActive}
                    title={notebook.title}
                    notebook={notebook}
                />
            ))}
        </ul>
    );
};
