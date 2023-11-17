import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { SideBar } from './SideBar/Sidebar';
import { Header } from './Header';

export const Layout: FC = () => (
    <div className='flex flex-col md:flex-row'>
        <SideBar />
        <div className=' basis-[80%] w-[100%] p-6'>
            <Header />
            <Outlet />
        </div>
    </div>
);


