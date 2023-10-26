import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';

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
        body: JSON.stringify({ title: param }), // Відправляємо title як властивість об'єкта
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to create notebook');
    }
});

export { addNotebook, getAllNotebooks };
