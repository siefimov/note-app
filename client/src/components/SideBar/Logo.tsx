import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPath } from '../../constants';

export const Logo: React.FC = () => {
    const navigate = useNavigate();
    
    const handleLogoClick = () => {
        navigate(AppPath.ROOT);
    };
    return (
        <div className='mb-6 hover:cursor-pointer' onClick={handleLogoClick}>
            <h2 className='text-2xl font-bold text-[#6382de]'>
                NOTE<span className='text-[#e3c134] font-normal italic'>Craft</span>
            </h2>
        </div>
    );
};
