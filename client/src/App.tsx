import { SideBar } from './components/SideBar/Sidebar';
import { NoteList } from './components/NoteList';

export const App = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <SideBar />
            <NoteList />
        </div>
    );
};
