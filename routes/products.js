const express = require("express");
let { products } = require("../db");
const { findById, updateById, createProduct } = require("../utils");
const router = express.Router();

/* Get all products */
router.get("/products", (req, res) => {
    res.json(products);
});

/* Get product by id */
router.get("/products/:id", (req, res) => {
    const product = findById(products, +req.params.id);
    res.json(product);
});

/* Create new product */
router.post("/products", (req, res) => {
    const { name, price } = req.body;

    const newProduct = createProduct({ name, price });

    res.status(201).json(newProduct);
});

/* Update product by id */
router.put("/products/:id", (req, res) => {
    const { name, price } = req.body;
    const updatedProduct = { name, price, id: req.params.id };

    products = updateById(products, req.params.id, updatedProduct);

    if (products.error)
        return res.json({
            ok: false,
            response: products.error
        });

    res.status(200).json(updatedProduct);
});

/* Delete product by id */
router.delete("/products/:id", (req, res) => {
    products = deleteById(products, req.params.id);

    if (products.error)
        return res.json({
            ok: false,
            response: products.error
        });

    res.status(200).json({
        ok: true,
        response: `Product with id ${req.params.id} deleted`
    });
});

module.exports = router;
