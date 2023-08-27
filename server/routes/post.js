import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from "../controller/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts, getFeedPosts);
router.get("/:userId/post", verifyToken, getUserPosts)

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
 