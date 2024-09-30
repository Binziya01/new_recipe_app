import express from "express"
import { getCategoryRecipe, getCategoryWiseRecipe, getRecipe, getRecipeDetails, updateRecipe, uploadRecipe } from "../controllers/recipeController.js"
import { isAdmin, isLoggedIn } from "../middlewares/authMiddleware.js"

const router = express.Router()

// upload recipe
router.post("/upload-recipe",isLoggedIn, isAdmin, uploadRecipe)
// get recipe
router.get("/get-recipe",getRecipe)
// edit recipe
router.post("/update-recipe/:id",updateRecipe)

router.get("/get-categoryRecipe",getCategoryRecipe)
router.post("/category-recipe",getCategoryWiseRecipe)
router.get("/recipe-details/:id",getRecipeDetails)

export default router