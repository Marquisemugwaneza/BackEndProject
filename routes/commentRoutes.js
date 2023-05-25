import bodyParser from "body-parser";
import express from "express";
import createComment from "../Controllers/comment.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/comment", createComment);

export default router
