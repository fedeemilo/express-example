let { users, products } = require("../db");

const searchElem = (data, id) => data.find(d => d.id === +id);

const findById = (data, id) => {
    const elem = searchElem(data, id);

    if (!elem)
        return {
            error: "User not found!"
        };

    return elem;
};

const createUser = ({ name, lastName }) => {
    const newUser = { name, lastName, id: (Math.random() * 100000000) | 0 };
    users = users.concat(newUser);
    return newUser;
};

const createProduct = ({ name, price }) => {
    const newProduct = { name, price, id: (Math.random() * 100000000) | 0 };
    products = products.concat(newProduct);
    return newProduct;
};

const updateById = (data, id, newElem) => {
    const elem = searchElem(data, id);
    if (!elem)
        return {
            error: `User with id ${id} not found`
        };

    return data.map(elem => (elem.id === +id ? newElem : elem));
};

const deleteById = (data, id) => {
    const elem = searchElem(data, id);

    if (!elem)
        return {
            error: `User with id ${id} not found`
        };

    return data.filter(({ id }) => id !== +id);
};

module.exports = {
    findById,
    updateById,
    deleteById,
    createUser,
    createProduct
};
