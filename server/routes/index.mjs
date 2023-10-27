import { Router } from 'express';
import notebookRouter from './notebookRouter.mjs';
import noteRouter from './notesRouter.mjs';

const router = new Router();

router.use('/notebooks', notebookRouter);
router.use('/notes', noteRouter);

export default router;
