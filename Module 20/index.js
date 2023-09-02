const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Models
const User = require('./src/models/UserModel');
const Product = require('./src/models/ProductModel');
const CartItem = require('./src/models/CartItemModel');
const Order = require('./src/models/OrderModel');

// DB Connection
const URI ="mongodb+srv://<username>:<password>@cluster0.9pvozuw.mongodb.net/module-18-db?retryWrites=true&w=majority";
const OPTION = {user:'ifty', pass:'ifty123',
useNewUrlParser: true,
useUnifiedTopology: true};
mongoose.connect(URI, OPTION).then(error=>{
    console.log("connected to database.")
   console.log(error);
})

User.pre('remove', async function (next) {
    try {
      // Remove user cart items
      await CartItem.deleteMany({ users: this._id });
  
      // Remove user orders
      await Order.deleteMany({ users: this._id });
  
      next();
    } catch (err) {
      next(err);
    }
  });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });

