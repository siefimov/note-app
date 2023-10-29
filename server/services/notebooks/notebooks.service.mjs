import { Notebook } from '../../models/notebook.mjs';

const getAll = async () => Notebook.find({});

const create = async (data) => new Notebook(data).save();

const update = async (id, data) => Notebook.findOneAndUpdate({ _id: id }, data);

const remove = async (id) => Notebook.findByIdAndDelete(id);

export { getAll, create, update, remove };
