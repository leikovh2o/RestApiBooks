import express from 'express';
import { getBooks, createBook, getBook, deleteBook, updateBook } from '../dist/controllers/books.js';

const router = express.Router();


router.get('/', getBooks);

router.post('/', createBook);

router.get('/:id', getBook);

router.delete('/:id', deleteBook);

router.patch('/:id', updateBook);


export default router;