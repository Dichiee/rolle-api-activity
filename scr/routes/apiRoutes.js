const express = require('express');
const router = express.Router();

const {
    getALLTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transactionController');

// Transaction Routes
router.get('/transactions', getALLTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

module.exports = router;