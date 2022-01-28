const express = require("express");
let { users } = require("../db");
const { findById, updateById, deleteById, createUser } = require("../utils");
const router = express.Router();

/* Get all users */
router.get("/users", (req, res) => {
    res.json(users);
});

/* Get user by id */
router.get("/users/:id", (req, res) => {
    const user = findById(users, req.params.id);
    res.json(user);
});

/* Create new user */
router.post("/users", (req, res) => {
    const { name, lastName } = req.body;
    const newUser = createUser({name, lastName})

    res.status(201).json(newUser);
});

/* Update user by id */
router.put("/users/:id", (req, res) => {
    const { name, lastName } = req.body;
    const updatedUser = { name, lastName, id: req.params.id };

    users = updateById(users, req.params.id, updatedUser);

    if (users.error) return res.json({
        ok: false,
        response: users.error
    })

    res.status(200).json(updatedUser);
});

/* Delete user by id */
router.delete("/users/:id", (req, res) => {
    users = deleteById(users, req.params.id)

    if (users.error)
        return res.json({
            ok: false,
            response: users.error
        });

    res.status(200).json({
        ok: true,
        response: `User with id ${req.params.id} deleted`
    });
});

module.exports = router;
