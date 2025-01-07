import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// GET all products
router.get('/', getProducts);
// CREATE a product
router.post('/', createProduct);
// UPDATE a product
router.put('/:id', updateProduct);
// DELETE a product
router.delete('/:id', deleteProduct);

export default router;
