const midtransClient = require('midtrans-client');
// Create Snap API instance
const snap = new midtransClient.Snap({
  // Set to true if you want Production Environment (accept real transaction).
  isProduction: false,
  serverKey: 'SB-Mid-server-Z3Unw_u_zypQKoAvG3JVEtuB'
});

const midtrans = async (req, res, next) => {
  let parameter = {
    "transaction_details": {
      "order_id": "YOUR-ORDERID-123456",
      "gross_amount": 10000
    },
    "credit_card": {
      "secure": true
    },
    "customer_details": {
      "first_name": "budi",
      "last_name": "pratama",
      "email": "budi.pra@example.com",
      "phone": "08111222333"
    }
  };
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