const worldRoute = (req, res) => {
    res.send("Hello World");
};

const planetRoute = (req, res) => {
    res.send("Hello Planet");
};

module.exports = {
    worldRoute,
    planetRoute,
};
