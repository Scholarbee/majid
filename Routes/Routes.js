const { getUser, postUser, putUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUser);
router.post("/signup", postUser);
router.put("/update-user/:id", putUser);

module.exports = router;
