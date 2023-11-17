import { Route, Routes, Navigate } from 'react-router-dom';

import { NoteList } from './components/NoteList';
import { AppPath } from './constants';
import { Layout } from './components/Layout';

export const App = () => {
    return (
        <Routes>
            <Route path={AppPath.ROOT} element={<Layout />}>
                <Route path={AppPath.NOTES} element={<NoteList />} />
                <Route path={AppPath.ANY} element={<Navigate to={AppPath.ROOT} />} />
            </Route>
        </Routes>
    );
};
