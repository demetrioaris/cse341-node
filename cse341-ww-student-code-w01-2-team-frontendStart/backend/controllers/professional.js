const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
    try {
        // Fetch the data from MongoDB
        const result = await mongodb
            .getDb()
            .db()
            .collection("user")
            .find()
            .toArray();
        // Send the first object in the collection
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
};

module.exports = { getData };
