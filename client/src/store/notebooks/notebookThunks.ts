import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { Notebook } from './initialState';
import { ApiPath, BASE_URL, ContentType, HttpMethod } from '../../constants';
import { notebookService } from './notebookService';
import { AxiosResponse } from 'axios';

const getAllNotebooks = createAsyncThunk(ActionTypes.NOTEBOOKS, async () => {
    const response = await notebookService.getAll();

    return response;
});

const addNotebook = createAsyncThunk(ActionTypes.ADD_NOTEBOOK, async (param: string) => {
    try {
        const data = await notebookService.create({ title: param });
        return data;
    } catch (error) {
        throw new Error('Failed to create notebook');
    }
    // const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}`, {
    //     method: HttpMethod.POST,
    //     headers: {
    //         'Content-Type': ContentType.JSON,
    //     },
    //     body: JSON.stringify({ title: param }),
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     return data;
    // } else {
    //     throw new Error('Failed to create notebook');
    // }
});

const editNotebookTitle = createAsyncThunk(ActionTypes.EDIT_NOTEBOOK, async (param: Notebook) => {
    try {
        const data = await notebookService.update(param._id, { title: param.title });
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Failed to edit notebook title');
    }

    // const response = await fetch(`${BASE_URL}${ApiPath.NOTEBOOKS}/${param._id}`, {
    //     method: HttpMethod.PUT,
    //     headers: {
    //         'Content-Type': ContentType.JSON,
    //     },
    //     body: JSON.stringify({ title: param.title }),
    // });
    // if (response.ok) {
    //     const data = await response.json();
    //     return data;
    // } else {
    //     throw new Error('Failed to edit notebook title');
    // }
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
