import express from 'express';
// import mongoose from 'mongoose';
import * as notesController from '../controllers/notes.controller.mjs';
const router = express.Router();

// import { NotesModel } from '../models/notes.mjs';

router.get('/', notesController.getAll);
/*
router.get('/', async (req, res) => {
    try {
        const allNotes = await NoteModel.find({});
        res.status(200).json(allNotes);
    } catch (error) {
        res.status(500).json({ error: 'Error getting notes by notebook id' });
    }
});
*/
router.post('/', notesController.create);
/*
router.post('/', async (req, res) => {
    try {
        const newNote = new NoteModel({
            title: req.body.title,
            description: req.body.description,
            notebookId: req.body.notebookId,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
        });

        const saveNote = await newNote.save();
        res.status(201).json(saveNote);
    } catch (error) {
        res.status(500).json('Error adding notes');
    }
});
*/
router.put('/:id', notesController.update);
/*
router.patch('/', async (req, res) => {
    try {
        const { _id, title, description, updatedAt } = req.body;

        const updateFields = {
            title,
            description,
            updatedAt,
        };

        const updatedNote = await NoteModel.findByIdAndUpdate(_id, updateFields, { new: true });

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the note.' });
    }
});
*/
router.delete('/:id', notesController.remove);
/*
router.delete('/:_id', async (req, res) => {
    try {
        const noteId = req.params._id;

        if (!noteId || !mongoose.isValidObjectId(noteId)) {
            return res.status(400).json({ error: 'Not corrected _id for deleting note' });
        }

        const deletedNote = await NoteModel.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({ error: 'Note was not find' });
        }

        res.status(200).json(deletedNote);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the note' });
    }
});
*/
export default router;
