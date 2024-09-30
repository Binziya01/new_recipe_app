import Recipe from "../models/recipeSchema.js"

export const uploadRecipe = async(req,res)=>{
    console.log("recipe");
    
    try{
        const dataUpload = new Recipe(req.body)
        const saveRecipe = await dataUpload.save()

        res.status(201).json({
            message: "Recipe upload successfully",
            error: false,
            success: true,
            data: saveRecipe
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

// get recipe

export const getRecipe = async(req,res)=>{
    try{
        const allRecipe = await Recipe.find().sort({ createdAt : -1 })
        
        res.json({
            message: "All recipe",
            success: true,
            error: false,
            data: allRecipe 
        })

    }catch(err){
        res.status(400).json({
        message: err.message || err,
        error: true,
        success: false
    })
    }
}

// Update recipe

export const updateRecipe = async(req,res)=>{
    try{
        const id = req.params['id']

        const updateData = await Recipe.findByIdAndUpdate(id,req.body,{new:true})

        res.json({
            message: "Product update successfully",
            data: updateData,
            success: true,
            error: false
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false

    })
}
}

// get one category recipe
export const getCategoryRecipe = async(req,res)=>{
    try{
        const recipeCategory = await Recipe.distinct("category")
        console.log("category",recipeCategory);
        
        // array to store one recipe from each category
        const recipeByCategory = []

        for(const category of recipeCategory){
            const recipe = await Recipe.findOne({category})

            if(recipe){
                recipeByCategory.push(recipe)
            }
        }

        res.json({
            message: "category recipe",
            data: recipeByCategory,
            success: true,
            error: false
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false

    })

    }
}

// Get category wise recipe

export const getCategoryWiseRecipe = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        console.log("Category received: ", category);
        
        const recipe = await Recipe.find({ category }) 

        res.json({
            data: recipe,
            message: "recipe",
            success: true,
            error: false

        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false

    })

    }
}

// get recipe details

export const getRecipeDetails = async(req,res)=>{
    try{
        const id = req.params['id']
        // const { id } = req.body
        const recipe = await Recipe.findById(id,req.body,{new:true})

        res.json({
            data: recipe,
            message: "Ok",
            success: true,
            error: false
        })

    }catch(err){
        res.json({
            message: err?.message || err,
            error: true,
            success: false

        }) 

    }
}