import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { NotebookItem } from './NotebookItem';

export const NotebookList: FC = () => {
    const notebooks = useAppSelector((state) => state.notebooks.list);
    return (
        <ul className=' rounded'>
            {notebooks.map((notebook) => (
                <NotebookItem
                    key={notebook.id}
                    id={notebook.id}
                    isActive={notebook.isActive}
                    title={notebook.title}
                    notebook={notebook}
                />
            ))}
        </ul>
    );
};
