const express = require("express");
const router = express.Router();

const {login , signup} = require("../controllers/auth");
const {addTopic,getTopics} = require("../controllers/topic");

router.post("/login",login);
router.post("/signup",signup);

router.post('/topic',addTopic);
router.get('/topic',getTopics);

module.exports = router;