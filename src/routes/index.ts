import express from "express";

let router = express();

router.use("/questions", require("../controller/questions"));
router.use("/leaderboard", require("../controller/leaderboard"));

export default router;
