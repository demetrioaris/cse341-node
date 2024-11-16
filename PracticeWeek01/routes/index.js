const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.worldRoute);
routes.get("/planet", lesson1Controller.planetRoute);
routes.get("/saturno", lesson1Controller.saturnoRoute);

module.exports = routes;
