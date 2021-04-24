"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var TextStatitics = require("text-statistics");
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get("/", function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send("Hello, World!");
});
router.get("/:name", function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    debugger;
    var score = new TextStatitics("hello world").fleschKincaidGradeLevel();
    // Greet the given name
    res.send("Hello, " + name);
});
exports.HomeController = router;
