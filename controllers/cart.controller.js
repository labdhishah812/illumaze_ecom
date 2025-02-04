const cartService = require('../services/cart.service');
const productModel = require("../models/product.model");
const cartModel = require("../models/cart.model");

// const createCart = async (req, res) => {
//     try {
//         const { userId, cartItems } = req.body;
//         const quantity = cartItems.map(item => item.product_quantity)
//         console.log(quantity)

//         if (findProduct) {
//             const updateQuntity = await cartModel.updateOne({ product }, { $set: { product_quantity: req.body.quantity }});
//             console.log(updateQuntity)
//         }

//         const findProduct = await cartModel.findOne({ product });

//         if (findProduct) {

//             const updateQuntity = await cartModel.updateOne({ product }, { $set: { product_quantity: req.body.product_quantity } });
//             res.status(200).json({
//                 data: updateQuntity,
//                 message: "product added"
//             })
//         } 
//         else {

//         // const productID = await cartModel.findOne({ 'cartItems.productId':  });
//         // console.log(productID)

//         const cart = await cartService.createCart({
//             userId, cartItems
//         })
//         res.status(201).json({
//             data: cart,
//             message: "product added"
//         })
//     }
//     }
//     catch (err) {
//         res.status(400).json({
//             Error: err.message,
//         })
//     }
// }

const createCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body;
        const cart = await cartService.createCart({
            userId, cartItems
        })
        res.status(201).json({
            data: cart,
            message: "product added to the cart"
        })
    } catch (error) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCart();
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOneCart = async (req, res) => {
    try {
        const cart = await cartService.getOneCart({ _id: req.params.id });
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updateCart = async (req, res) => {
    try {
        const cart = await cartService.updateCart({ _id: req.params.id }, { $set: req.body });
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deleteCart = async (req, res) => {
    try {
        const cart = await cartService.deleteCart({ _id: req.params.id });
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const clearCart = async (req, res) => {
    try {
        const cart = await cartService.clearCart();
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const productId = req.params.productId;
        const result = await cartService.deleteCartItem(productId);

        res.status(200).json({
            data: result
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

// const deleteCartItem = async (req, res) => {
//         try {
//             const cartID = await cartModel.findOne({ _id: req.params.id }); // Cart ID

//             if (!cartID) {
//                 return res.status(404).json({ message: "Cart not found" });
//             }

//             const productID = req.params.productId;
//             const result = await cartModel.updateOne(
//                 { 'cartItems.productId': productID },
//                 { $pull: { cartItems: { productId: productID } } }
//             );

//             if (result.nModified === 0) {
//                 throw new Error('Product not found or already deleted');
//             }

//             return { success: true };

// const findProduct = cartID.cartItems;

// const product = findProduct.find(product => product.productId.toString() === productID);
// console.log(product)

// if (!product) {
//     return res.status(404).json({ message: "Product not found in cart" });
// }

// const deleteProduct = await cartService.deleteCartItem({ _id: productID });

//     res.status(201).json({
//         data: deleteProduct,
//         message: "Successfully deleted product from cart"
//     });
// } catch (err) {
//     res.status(500).json({
//         Error: err.message,
//     });
// }


// try{

//     const cartID = await cartModel.findOne({_id : req.params.id}) //cartID
//     // console.log(cartID)

//     const productID = req.params.productId
//     console.log(productID)

//     const findProduct = await cartID.cartItems
//     // console.log(find)

//     const product = findProduct.find(product => product.productId)
//     console.log(product)

//     const findProductId = await cartService.deleteCartItem({_productId : productID})
//     console.log(findProductId)

//     res.status(201).json({
//         data:findProductId,
//         message: "successfully created product"
//     })

// }
// catch (err) {
//         res.status(400).json({
//             Error: err.message,
//         })
//     }

// try {

//     const productId = req.body.products

//     const findproductID = await cartModel.findOne(productId)
//     console.log(findproductID)

//     if (findproductID) {
//         const cart = await cartService.deleteCartItem({ _id: req.params.product });
//         res.status(201).json({
//             data: cart,
//             message: "successfully created product"
//         })
//     }
// }
// catch (err) {
//     res.status(400).json({
//         Error: err.message,
//     })
// }
// }


module.exports = {
    createCart,
    getCart,
    getOneCart,
    updateCart,
    deleteCart,
    clearCart,
    deleteCartItem
}