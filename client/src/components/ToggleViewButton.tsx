import { FC } from 'react';
import { GrList, GrProjects } from 'react-icons/gr';

interface IToggleViewButtonProps {
    isTableView: boolean;
    handleListClick: () => void;
}

const ToggleViewButton: FC<IToggleViewButtonProps> = ({ isTableView, handleListClick }) => (
    <div className='flex justify-end gap-3 cursor-pointer'>
        {isTableView ? (
            <div className='border border-slate-300 p-2 rounded hover:bg-slate-50'>
                <GrProjects onClick={handleListClick} />
            </div>
        ) : (
            <div className='border border-slate-300 p-2 rounded hover:bg-slate-50'>
                <GrList onClick={handleListClick} />
            </div>
        )}
    </div>
);

export default ToggleViewButton;
