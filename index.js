const express = require('express');
const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
const subCatgoryRouter = require('./routers/sub_category.router');
const productRouter = require('./routers/product.router');
const cartRouter = require('./routers/cart.router');
const listRouter = require('./routers/list.router');
const orderRouter = require('./routers/order.router');
const paymentRouter = require('./routers/payment.router');


const app = express.Router();

app.use('/users' , userRouter);

app.use('/categories' , categoryRouter);

app.use('/subcategories' , subCatgoryRouter);

app.use('/products' , productRouter);

app.use('/carts' , cartRouter);

app.use('/lists' , listRouter);

app.use('/orders' , orderRouter);

app.use('/payments' , paymentRouter);

module.exports = app;