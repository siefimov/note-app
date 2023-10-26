import { Router } from 'express';
import notebookRouter from './notebookRouter.mjs';

const router = new Router();

router.use('/notebooks', notebookRouter);

export default router

