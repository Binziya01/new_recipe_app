import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    recipeName: String,
        category: String,
        thumbnailImage: [],
        instructions: String,
        ingredients: []
},{
    timestamps : true
})

export default mongoose.model("Recipe",recipeSchema)