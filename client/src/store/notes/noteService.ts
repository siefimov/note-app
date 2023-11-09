import GenericService from '../../services/api/GenericServise';
import { addNoteParam } from './noteThunks';

export const noteService = new GenericService<addNoteParam>('notes');
