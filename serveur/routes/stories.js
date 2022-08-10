import { Router } from "express";
import { getStories , createStory } from "../controllers/stories.js";

//need more documentation about routes, no idea yet what are there perpes x)
// documentation done : yet can't explain what they are in fact beside that you need them to render some components ^^ 
const router = Router()

router.get('/', getStories )
router.post('/', createStory )


export default router