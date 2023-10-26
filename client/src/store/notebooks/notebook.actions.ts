import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';

export const getAllNotebooks = createAsyncThunk(ActionTypes.NOTEBOOKS, async () => {
    const response = await fetch('http://localhost:5500/api/notebooks');
    const data = await response.json();
    return data;
});
