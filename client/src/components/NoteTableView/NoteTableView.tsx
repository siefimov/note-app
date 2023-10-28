import { useAppSelector } from '../../store/hooks';
import { NoteTableItem } from './NoteTableItem';
import './styles.css';

export const NoteTableView: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.list);

    const notebooks = useAppSelector((state) => state.notebooks.list);
    const activeNotebook = notebooks.filter((notebook) => notebook.isActive === true);

    const activeNotebookNotes = notes.filter((note) => note.notebookId === activeNotebook[0]?._id);

    return (
        <div className='flex flex-col'>
            <div className='sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-x-hidden'>
                        <table className='table-auto min-w-[75vw] text-left text-sm font-light'>
                            <thead className='border-b font-medium dark:border-neutral-500'>
                                <tr className='bg-slate-200'>
                                    <th className='px-6 py-4'>№</th>
                                    <th className='px-6 py-4'>title</th>
                                    <th className='px-6 py-4'>description</th>
                                    <th className='px-6 py-4'>created at</th>
                                    <th className='px-6 py-4'>updated at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeNotebookNotes.map((note, index) => (
                                    <NoteTableItem
                                        key={note._id}
                                        id={index + 1}
                                        title={note.title}
                                        description={note.description}
                                        createdAt={`${note.createdAt.split('T')[0].split('-').join('.')}, ${
                                            note.createdAt.split('T')[1].split(':')[0]
                                        }:${note.createdAt.split('T')[1].split(':')[1]}`}
                                        updatedAt={`${note.updatedAt?.split('T')[0].split('-').join('.')}`}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
