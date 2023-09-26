const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const cartController = require('../Controllers/cartController');
const categoryController = require('../Controllers/categoryController');
const customerController = require('../Controllers/customerController');
const orderController = require('../Controllers/orderController');
const order_itemController = require('../Controllers/order_itemController');
const paymentController = require('../Controllers/paymentController');
const postController = require('../Controllers/postController');
const productController = require('../Controllers/productController');
const shipmentController = require('../Controllers/shipmentController');
const subAdminController = require('../Controllers/subAdminController');
const wishlistController = require('../Controllers/wishlistController');

//User
router.post('/user', userController.create);
router.get('/user', userController.read);
router.delete('/user/:id', userController.delete);
router.put('/user/:id', userController.update);

//Admin
router.post('/admin', adminController.create);
router.get('/admin', adminController.read);
router.delete('/admin/:id', adminController.delete);
router.put('/admin/:id', adminController.update);

//Cart
router.post('/cart', cartController.create);
router.get('/cart', cartController.read);
router.delete('/cart/:id', cartController.delete);
router.put('/cart/:id', cartController.update);

//Category
router.post('/category', categoryController.create);
router.get('/category', categoryController.read);
router.delete('/category/:id', categoryController.delete);
router.put('/category/:id', categoryController.update);

//Customer
router.post('/customer', customerController.create);
router.get('/customer', customerController.read);
router.delete('/customer/:id', customerController.delete);
router.put('/customer/:id', customerController.update);

//Order
router.post('/order', orderController.create);
router.get('/order', orderController.read);
router.delete('/order/:id', orderController.delete);
router.put('/order/:id', orderController.update);

//Order Item
router.post('/order_item', order_itemController.create);
router.get('/order_item', order_itemController.read);
router.delete('/order_item/:id', order_itemController.delete);
router.put('/order_item/:id', order_itemController.update);

//Payment
router.post('/payment', paymentController.create);
router.get('/payment', paymentController.read);
router.delete('/payment/:id', paymentController.delete);
router.put('/payment/:id', paymentController.update);

//Post
router.post('/post', postController.create);
router.get('/post', postController.read);
router.delete('/post/:id', postController.delete);
router.put('/post/:id', postController.update);

//Product
router.post('/product', productController.create);
router.get('/product', productController.read);
router.delete('/product/:id', productController.delete);
router.put('/product/:id', productController.update);

//Shipment
router.post('/shipment', shipmentController.create);
router.get('/shipment', shipmentController.read);
router.delete('/shipment/:id', shipmentController.delete);
router.put('/shipment/:id', shipmentController.update);

//Sub Admin
router.post('/sub_admin', subAdminController.create);
router.get('/sub_admin', subAdminController.read);
router.delete('/sub_admin/:id', subAdminController.delete);
router.put('/sub_admin/:id', subAdminController.update);

//Wishlist
router.post('/wishlist', wishlistController.create);
router.get('/wishlist', wishlistController.read);
router.delete('/wishlist/:id', wishlistController.delete);
router.put('/wishlist/:id', wishlistController.update);

module.exports = router;
