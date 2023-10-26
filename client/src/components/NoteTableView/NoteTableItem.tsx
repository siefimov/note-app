import { FC } from 'react';
import './styles.css';

interface INoteTableItemProps {
    id: number | null;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export const NoteTableItem: FC<INoteTableItemProps> = (props) => {
    const { id, title, description, createdAt, updatedAt } = props;
    return (
        <>
            <tr
                key={id}
                className='border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600'
            >
                <td className='whitespace-nowrap px-6 py-4 font-medium'>{id}</td>
                <td className='whitespace-nowrap px-6 py-4'>{title}</td>
                <td className='max-w-[400px] px-6 py-4 truncate'>{description}</td>
                <td className='whitespace-nowrap px-6 py-4'>{createdAt}</td>
                <td className='whitespace-nowrap px-6 py-4'>{updatedAt}</td>
            </tr>
        </>
    );
};
