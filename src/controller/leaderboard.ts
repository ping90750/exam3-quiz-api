import { Router } from "express";
import { leaderboards } from "../data/mockLeaderboards";

const router = Router();

router.get("/", (req, res) => {
  leaderboards.sort((a, b) => b.score - a.score);

  res.status(200).json({ message: "ok", data: leaderboards });
});
router.get("/:id", (req, res) => {
  // leaderboards.sort((a, b) => b.score - a.score);

  const queryArr = leaderboards.find((item) => item.id === req.params.id);
  console.log("queryArr", queryArr);
  if (queryArr !== undefined) {
    res.status(200).json({ message: "ok", data: queryArr });
  } else {
    res.status(400).json({ message: "Could not find user ID in the system." });
  }
});

module.exports = router;
