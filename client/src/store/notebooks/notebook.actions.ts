import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { Notebook } from './initialState';
import { ApiPath, BASE_URL, ContentType, HttpMethod } from '../../constants';

const getAllNotebooks = createAsyncThunk(ActionTypes.NOTEBOOKS, async () => {
    const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}`);
    const data = await response.json();
    return data;
});

const addNotebook = createAsyncThunk(ActionTypes.ADD_NOTEBOOK, async (param: string) => {
    const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}`, {
        method: HttpMethod.POST,
        headers: {
            'Content-Type': ContentType.JSON,
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
    const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}`, {
        method: HttpMethod.PATCH,
        headers: {
            'Content-Type': ContentType.JSON,
        },
        body: JSON.stringify({ _id: param._id, title: param.title }),
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to edit notebook title');
    }
});

const deleteNotebook = createAsyncThunk(ActionTypes.DELETE_NOTEBOOK, async (param: number) => {
    const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}/${param}`, {
        method: HttpMethod.DELETE,
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to delete notebook');
    }
});

export { addNotebook, getAllNotebooks, editNotebookTitle, deleteNotebook };
