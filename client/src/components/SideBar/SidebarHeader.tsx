import * as React from 'react';

interface ISidebarHeaderProps {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const SidebarHeader: React.FunctionComponent<ISidebarHeaderProps> = ({ onClick }) => {
    return (
        <div className='flex justify-between items-center mb-6 border-b-2 pb-2'>
            <h3 className='text-xl text-teal-600 uppercase'>Notebooks</h3>
            <button
                onClick={onClick}
                className='border rounded px-3 text-2xl font-bold text-slate-200 bg-teal-500 hover:bg-teal-600'
            >
                +
            </button>
        </div>
    );
};
