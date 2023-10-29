import { Router } from 'express';
import notebooksRouter from './notebooks.route.mjs';
import notesRouter from './notes.route.mjs';

const router = new Router();

router.use('/notebooks', notebooksRouter);
router.use('/notes', notesRouter);

export default router;
