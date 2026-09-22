import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    apiVersion: "v1",
    message: "API is healthy"
  });
});

export default router;
