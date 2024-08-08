import express from "express";
import { createLink, getLinks, QRGenerator, redirectLinks } from "../controllers/links";
import { validateLink } from "../validators/linkValidate";

const router = express.Router();

router.get("/get-links", getLinks);
router.post("/create-link", validateLink, createLink);
router.get("/:shortUrl", redirectLinks);
router.post("/generateQR", QRGenerator);

export default router;
