import { NotesModel } from '../models/notes.mjs';

const getAll = async () => NotesModel.find({});

const create = async (data) => new NotesModel(data).save();

const update = async (id, data) => NotesModel.findOneAndUpdate({ _id: id }, data);

const remove = async (id) => NotesModel.findByIdAndDelete(id);

export { getAll, create, update, remove };
