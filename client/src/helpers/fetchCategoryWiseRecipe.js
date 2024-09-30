

const fetchCategoryWiseRecipe = async(category)=>{
    const apiEndpoint = 'http://localhost:4000/api/v1/recipe/category-recipe';

    const categoryData = { category };

    
        // Send a POST request to save the recipe
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              "Authorization" : `Bearer ${window.localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
            
        });

        const dataResponse = await response.json()
        return dataResponse

}

export default fetchCategoryWiseRecipe