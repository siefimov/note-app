import mongoose, { Schema } from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    notebookId: {
        type: Schema.Types.ObjectId,
        ref: "Notebooks",
        required: true,
    },
    createdAt: {
        type: String,
        // default: Date.now,
        // required: true,
    },
    updatedAt: {
        type: String,
        // type: Date,
    },
});

export const NotesModel = mongoose.model('Notes', noteSchema);
