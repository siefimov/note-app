import mongoose from 'mongoose';

const notebookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

export const Notebook = mongoose.model('Notebooks', notebookSchema);
