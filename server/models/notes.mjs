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

export const NoteModel = mongoose.model('Note', noteSchema);
