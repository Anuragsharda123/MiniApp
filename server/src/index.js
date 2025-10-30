const express = require('express');
const cors = require('cors');
const sequelize = require('./Config/db');
const User = require('./Models/userModel');
const Product = require('./Models/productModel');
const Local = require('./Environment/env');
const userRoutes = require('./Routes/userRoutes');

const PORT = Local.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/', userRoutes);

sequelize.authenticate().then(() => {
    sequelize.sync({ alter: true }).then(() => {
        console.log("Database connected and synchronized");
    }).then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.error("Error synchronizing the database:", err);
    });
}).catch((err) => {
    console.error("Unable to connect to the database:", err);
});