import express from 'express';
import * as notebooksController from '../controllers/notebooks.controller.mjs';

const router = express.Router();

/**
 * @openapi
 * /api/notebooks:
 *   get:
 *     summary: Get all notebooks
 *     description: Retrieve a list of all notebooks.
 *     responses:
 *       '200':
 *         description: Successful response
 *       '500':
 *         description: Internal server error
 */

router.get('/', notebooksController.getAll);

router.post('/', notebooksController.create);

router.put('/:id', notebooksController.update);

router.delete('/:id', notebooksController.remove);

export default router;
