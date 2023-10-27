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

export { getNotes, addNote };
