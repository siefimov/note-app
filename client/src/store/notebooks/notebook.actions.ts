import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { Notebook } from './initialState';

const getAllNotebooks = createAsyncThunk(ActionTypes.NOTEBOOKS, async () => {
    const response = await fetch('http://localhost:5500/api/notebooks');
    const data = await response.json();
    return data;
});

const addNotebook = createAsyncThunk(ActionTypes.ADD_NOTEBOOK, async (param: string) => {
    const response = await fetch('http://localhost:5500/api/notebooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: param }),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to create notebook');
    }
});

const editNotebookTitle = createAsyncThunk(ActionTypes.EDIT_NOTEBOOK, async (param: Notebook) => {
    const response = await fetch('http://localhost:5500/api/notebooks', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: param.title, title: param.title }),
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to edit notebook title');
    }
});

export { addNotebook, getAllNotebooks, editNotebookTitle };
