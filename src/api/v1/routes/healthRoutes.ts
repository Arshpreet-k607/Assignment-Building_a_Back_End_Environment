import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  // Adjust fields to match video demo if needed
  res.status(200).json({
    status: "ok",
    apiVersion: "v1",
    message: "API is healthy"
  });
});

export default router;
