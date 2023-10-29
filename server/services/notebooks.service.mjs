import { NotebookModel } from '../models/notebook.mjs';

const getAll = async () => NotebookModel.find({});

const create = async (data) => new NotebookModel(data).save();

const update = async (id, data) => NotebookModel.findOneAndUpdate({ _id: id }, data);

const remove = async (id) => NotebookModel.findByIdAndDelete(id);

export { getAll, create, update, remove };
