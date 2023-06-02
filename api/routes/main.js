/**
 * Main route of /
 */
import express from 'express';

import * as ProductController from '../controllers/master/Product.controller.js';
import * as UserController from '../controllers/master/User.controller.js';
import * as AgentController from '../controllers/master/Agent.controller.js';
import * as StockistController from '../controllers/master/Stockist.controller.js';

const router = express.Router()

router.use((req, res, next) => {
  // console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.render('login.html', { next: 'agents' });
});

router.get('/home', (req, res) => {
  res.redirect("/agents");
});

router.get('/products', (req, res) => {
  ProductController.index(req, res)
});

router.get('/users', (req, res) => {
  UserController.index(req, res)
});

router.get('/agents', (req, res) => {
  AgentController.index(req, res)
});

router.get('/master-stockists', (req, res) => {
  StockistController.index(req, res)
});

/**
 * REPORT
 */
router.get('/sales-report', (req, res) => {
  res.render('main/report/sales.html');
});

router.get('/stock-report', (req, res) => {
  res.render('main/report/stock.html');
});

router.get('/stockist-report', (req, res) => {
  res.render('main/report/stockist.html');
});

router.get('/agent-report', (req, res) => {
  res.render('main/report/agent.html');
});

export default router