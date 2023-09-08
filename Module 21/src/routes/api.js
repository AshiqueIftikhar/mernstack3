const express = require('express');
const router = express.Router();
const salesModel = require('../controllers/salesController');

router.get('/sales/total-revenue', salesModel.totalRevenue);
router.get('/sales/quantity-by-product', salesModel.quantityByProduct);
router.get('/sales/top-product', salesModel.topProduct);
router.get('/sales/average-price', salesModel.averagePrice);
router.get('/sales/revenue-by-month', salesModel.revenueByMonth);
router.get('/sales/highest-quantity-sold', salesModel.highestQuantitySold);

module.exports = router;