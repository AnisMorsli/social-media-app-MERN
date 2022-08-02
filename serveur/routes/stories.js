import { Router } from "express";
import { getStories , createStory } from "../controllers/stories.js";

//need more documentation about routes, no idea yet what are there perpes x)

const router = Router()

router.get('/', getStories )
router.post('/', createStory )


export default router