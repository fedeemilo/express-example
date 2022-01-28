const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const usersRoutes = require('./routes/users')
const productsRoutes = require("./routes/products");

app.use(express.json())

app.use('/', usersRoutes)
app.use("/", productsRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
