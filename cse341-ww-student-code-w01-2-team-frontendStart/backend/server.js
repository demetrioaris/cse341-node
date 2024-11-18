const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const routeProf = require("./routes/professional");

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, DELETE"
        );
        next();
    })
    .use("/professional", routeProf);

// Initialize database and start the server
mongodb.initDb((err) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on port ${port}`);
        });
    }
});
