/**
 * Main route of /stockist
 */
import express from 'express';
const router = express.Router()

router.use((req, res, next) => {
  // console.log('Time: ', Date.now());
  next()
})

router.get('/', (req, res) => {
  res.render('login.html', { next: 'stockist/home' });
})

router.get('/home', (req, res) => {
  res.render('stockist/home.html');
});

router.get('/sales', (req, res) => {
  res.render('stockist/trx/sales.html');
});

router.get('/sales-form', (req, res) => {
  res.render('stockist/trx/sales-form.html');
});

router.get('/purchase', (req, res) => {
  res.render('stockist/trx/purchase.html');
});

router.get('/purchase-form', (req, res) => {
  res.render('stockist/trx/purchase-form.html');
});

router.get('/preorder', (req, res) => {
  res.render('stockist/trx/preorder.html');
});

router.get('/preorder-form', (req, res) => {
  res.render('stockist/trx/preorder-form.html');
});

router.get('/inventory', (req, res) => {
  res.render('stockist/inventory.html');
});

router.get('/agent', (req, res) => {
  res.render('stockist/master/agent.html');
});

router.get('/report-stock', (req, res) => {
  res.render('stockist/report/stock.html');
});

router.get('/report-sales', (req, res) => {
  res.render('stockist/report/sales.html');
});

router.get('/report-purchase', (req, res) => {
  res.render('stockist/report/purchase.html');
});

export default router