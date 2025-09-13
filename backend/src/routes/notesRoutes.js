import express from 'express';
const router = express.Router();
import { getNotes, createNote, updateNote, deleteNote,getNoteById } from '../controllers/notesController.js';



router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;