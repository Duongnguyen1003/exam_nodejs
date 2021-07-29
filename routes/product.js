import express from 'express';
import { list, create, productId, read } from '../controllerBooks/product'

const router = express.Router();

router.post('/product/add', create);
router.get('/products', list);
router.get('/product/:id', read);

router.param('id', productId);

module.exports = router;