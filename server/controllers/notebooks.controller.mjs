import * as notebookService from '../services/notebooks.service.mjs';

const getAll = async (req, res, next) => {
    try {
        const allNotebooks = await notebookService.getAll();
        res.json(allNotebooks);
    } catch (error) {
        console.error(`Error while getting the notebooks`, error.message);
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        res.json(await notebookService.create(req.body));
    } catch (error) {
        console.error(`Error while creating the notebooks`, error.message);
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        res.json(await notebookService.update(req.params.id, req.body));
    } catch (error) {
        console.error(`Error while updating the notebook`, error.message);
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        res.json(await notebookService.remove(req.params.id));
    } catch (error) {
        console.error(`Error while deleting the notebook`, error.message);
        next(error);
    }
};

export { getAll, create, update, remove };
