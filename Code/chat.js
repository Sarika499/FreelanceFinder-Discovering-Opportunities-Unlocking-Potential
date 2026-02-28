const express = require("express");
const router = express.Router();

router.get("/chats", (req, res) => {
  res.json([{ message: "Chat working ✅" }]);
});

module.exports = router;
