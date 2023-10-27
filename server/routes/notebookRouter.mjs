import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import { Notebook } from '../models/notebook.mjs';

router.get('/', async (req, res) => {
    try {
        const allNotebooks = await Notebook.find({});
        res.status(200).json(allNotebooks);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const newNotebook = new Notebook({
            title: req.body.title,
        });

        const savedNotebook = await newNotebook.save();
        res.status(201).json(savedNotebook);
    } catch (error) {
        res.json(error);
    }
});

router.patch('/', async (req, res) => {
    try {
        const { _id, title } = req.body;

        const updatedNotebook = await Notebook.findOneAndUpdate({ _id }, { title }, { new: true });

        if (!updatedNotebook) {
            return res.status(404).json({ message: 'Notebook not found' });
        }

        res.status(200).json(updatedNotebook);
    } catch (error) {
        res.status(500).json({ error: 'Error updating the notebook name.' });
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        const notebookId = req.params._id;

        if (!notebookId || !mongoose.isValidObjectId(notebookId)) {
            return res.status(400).json({ error: 'Некоректний _id для видалення блокноту' });
        }

        const deletedNotebook = await Notebook.findByIdAndDelete(notebookId);

        if (!deletedNotebook) {
            return res.status(404).json({ error: 'Блокнот не знайдено' });
        }

        res.status(200).json(deletedNotebook);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error deleting the notebook' });
    }
});

export default router;
