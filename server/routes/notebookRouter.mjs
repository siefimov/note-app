import express from 'express';
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

export default router;
