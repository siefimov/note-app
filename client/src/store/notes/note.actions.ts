import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { ApiPath, BASE_URL, ContentType, HttpMethod } from '../../constants';

interface addNoteParam {
    title: string;
    description: string;
    notebookId: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

const getNotes = createAsyncThunk(ActionTypes.GET_NOTES, async () => {
    const response = await fetch(`${BASE_URL}${ApiPath.NOTES}`);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Faild to get Notes');
    }
});

const addNote = createAsyncThunk(ActionTypes.ADD_NOTE, async (param: addNoteParam) => {
    const { title, description, notebookId, isActive, createdAt, updatedAt } = param;
    const response = await fetch(`${BASE_URL}${ApiPath.NOTES}`, {
        method: HttpMethod.POST,
        headers: {
            'Content-Type': ContentType.JSON,
        },
        body: JSON.stringify({
            title,
            description,
            notebookId,
            isActive,
            createdAt,
            updatedAt,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to create notebook');
    }
});

const deleteNote = createAsyncThunk(ActionTypes.DELETE_NOTE, async (param: number | null) => {
    const response = await fetch(`${BASE_URL}${ApiPath.NOTES}/${param}`, {
        method: HttpMethod.DELETE,
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to delete notebook');
    }
});

const updateNote = createAsyncThunk(
    ActionTypes.EDIT_NOTE,
    async (param: { _id: number; title: string; description: string; updatedAt: string }) => {
        const response = await fetch(`${BASE_URL}${ApiPath.NOTES}/${param._id}`, {
            method: HttpMethod.PUT,
            headers: {
                'Content-Type': ContentType.JSON,
            },
            body: JSON.stringify({
                // _id: param._id,
                title: param.title,
                description: param.description,
                updatedAt: param.updatedAt,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw new Error('Failed to edit note title');
        }
    }
);

export { getNotes, addNote, deleteNote, updateNote };
