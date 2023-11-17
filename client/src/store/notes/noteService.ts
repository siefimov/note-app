import GenericService from '../../services/api/GenericServise';
import { Note } from './initialState';

export const noteService = new GenericService<Note>('notes');
