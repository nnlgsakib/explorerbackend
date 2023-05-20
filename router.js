const express = require('express');
const router = express.Router();
const {
  BlockStat,
  Block,
  Account,
  Contract,
  Transaction,
} = require('./db'); 


router.get('/blockstats', async (req, res) => {
  try {
    const blockStats = await BlockStat.find();
    res.json(blockStats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block stats' });
  }
});

// Get block stat by number
router.get('/blockstats/:number', async (req, res) => {
  const { number } = req.params;
  try {
    const blockStat = await BlockStat.findOne({ number: parseInt(number) });
    if (!blockStat) {
      return res.status(404).json({ error: 'Block stat not found' });
    }
    res.json(blockStat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block stat' });
  }
});

// Get all blocks
router.get('/blocks', async (req, res) => {
  try {
    const blocks = await Block.find();
    res.json(blocks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blocks' });
  }
});

// Get block by number
router.get('/blocks/:number', async (req, res) => {
  const { number } = req.params;
  try {
    const block = await Block.findOne({ number: parseInt(number) });
    if (!block) {
      return res.status(404).json({ error: 'Block not found' });
    }
    res.json(block);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block' });
  }
});

// Get all accounts
router.get('/accounts', async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
});

// Get account by address
router.get('/accounts/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const account = await Account.findOne({ address });
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch account' });
  }
});


router.get('/contracts', async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.json(contracts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contracts' });
  }
});


router.get('/contracts/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const contract = await Contract.findOne({ address });
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contract' });
  }
});

// Get all transactions
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Get transaction by hash
router.get('/transactions/:hash', async (req, res) => {
  const { hash } = req.params;
  try {
    const transaction = await Transaction.findOne({ hash });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transaction' });
  }
});
router.get('/internaltransactions', async (req, res) => {
    try {
      const internalTransactions = await InternalTransaction.find();
      res.json(internalTransactions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch internal transactions' });
    }
  });
  
  // Get internal transactions by block number
  router.get('/internaltransactions/block/:number', async (req, res) => {
    const { number } = req.params;
    try {
      const internalTransactions = await InternalTransaction.find({ blockNumber: parseInt(number) });
      res.json(internalTransactions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch internal transactions' });
    }
  });
  
  // Get internal transactions by transaction hash
  router.get('/internaltransactions/transaction/:hash', async (req, res) => {
    const { hash } = req.params;
    try {
      const internalTransactions = await InternalTransaction.find({ transactionHash: hash });
      res.json(internalTransactions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch internal transactions' });
    }
  });

  router.get('/daocreatedtokens', async (req, res) => {
    try {
      const daoCreatedTokens = await DAOCreatedToken.find();
      res.json(daoCreatedTokens);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch DAO created tokens' });
    }
  });
  
  // Get all DAO transfer tokens
  router.get('/daotransfertokens', async (req, res) => {
    try {
      const daoTransferTokens = await DAOTransferToken.find();
      res.json(daoTransferTokens);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch DAO transfer tokens' });
    }
  });

module.exports = router;
