import express from "express"
import { createArticle, deleteArticle, readArticle, updateArticle } from "../Controllers/articles.js";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());


router.post("/save", createArticle);

router.get("/names/:reqName", readArticle)
router.delete("/delete", deleteArticle)
router.patch("/read", updateArticle)

export default router;