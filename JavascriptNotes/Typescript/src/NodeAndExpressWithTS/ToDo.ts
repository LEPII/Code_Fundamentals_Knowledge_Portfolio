import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Look at all of my todos bro");
});

export default router;
