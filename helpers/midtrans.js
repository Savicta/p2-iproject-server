const midtransClient = require('midtrans-client');
// Create Snap API instance
const snap = new midtransClient.Snap({
  // Set to true if you want Production Environment (accept real transaction).
  isProduction: false,
  serverKey: 'SB-Mid-server-Z3Unw_u_zypQKoAvG3JVEtuB'
});

const midtrans = async (req, res, next) => {
  try {
    const transaction = await snap.createTransaction(req.body);
    if (transaction) {
      res.status(200).json({ transactionToken: transaction.token });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = midtrans;