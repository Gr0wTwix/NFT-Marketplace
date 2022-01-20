require("dotenv").config();
const expressConfig = require("./config/express");
const databaseConfig = require("./config/database");
//const storage = require("./middlewares/storage");

const PORT = process.env.PORT || 5000;
const app = require("express")();

// databaseConfig(app);
// app.use(storage());
expressConfig(app);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({
        error: {
            message: message,
            status: status
        },
        data: data
    });
});

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);