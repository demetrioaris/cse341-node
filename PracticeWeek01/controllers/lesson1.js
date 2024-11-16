const saturnoRoute = (req, res) => {
    res.send("Hello Saturno");
};

const worldRoute = (req, res) => {
    res.send("Hello World");
};

const planetRoute = (req, res) => {
    res.send("Hello Planet");
};

module.exports = {
    worldRoute,
    planetRoute,
    saturnoRoute,
};
