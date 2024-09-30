import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import { toast } from 'sonner';

const UploadRecipe = ({onClose, fetchdata}) => {

    const [data,setData]=useState({
        recipeName: "",
        category: "",
        thumbnailImage: [],
        instructions: "",
        ingredients: []
        
    })
    const [ingredient, setIngredient] = useState({ name: "", quantity: "" });


    const [openFullScreenImage,setOpenFullScreenImage] = useState(false)
    const [fullScreenImage,setFullScreenImage] = useState("")

    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })

    }

    const handleIngredientChange = (e) => {
        const { name, value } = e.target;
        setIngredient((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addIngredient = () => {
        setData((prev) => ({
            ...prev,
            ingredients: [...prev.ingredients, { ...ingredient, _id: new Date().getTime().toString() }]
        }));
        setIngredient({ name: "", quantity: "" });  // Reset input fields
    };

    const removeIngredient = (id) => {
        setData((prev) => ({
            ...prev,
            ingredients: prev.ingredients.filter((ing) => ing._id !== id)
        }));
    };

    const handleUploadRecipe = async(e)=>{
        const file = e.target.files[0]

        const uploadImageCloudinary = await uploadImage(file)

        setData((preve)=>{
            return {
                ...preve,
                thumbnailImage : [...preve.thumbnailImage, uploadImageCloudinary.url]
                

            }
        })
        
        
    }
    const handleDeleteRecipeImage = async(index)=>{
        console.log("image index",index);
        const newRecipeImage = [...data.thumbnailImage]
        newRecipeImage.splice(index,1)

        setData((preve)=>{
            return {
                ...preve,
                thumbnailImage : [...newRecipeImage]
                

            }
        })
        

    }

    // Upload recipe
    const handleSubmit = async(e)=>{
        e.preventDefault()
       console.log("data",data);
   
    const apiEndpoint = 'http://localhost:4000/api/v1/recipe/upload-recipe';

    const recipeData = {
        recipeName: data.recipeName,
        category: data.category,
        instructions: data.instructions,
        thumbnailImage: data.thumbnailImage, 
        ingredients: data.ingredients
    };

    
        // Send a POST request to save the recipe
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              "Authorization" : `Bearer ${window.localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData),
        });


        // Check for a successful response
        const responseData = await response.json()

        if(responseData.success){
            toast.success(responseData?.message)
            onClose()
            fetchdata()
        }

        if(responseData.error){
            toast.error(responseData?.message)
        }

      
    }
  return (
    <div className='fixed bg-slate-200 bg-opacity-35 w-full h-full top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
        <div className='flex justify-between items-center pb-3'>
            <h2 className='font-bold text-lg'>Upload Recipe</h2>
            <div onClick={onClose} className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer'>
            <CgClose />
            </div>
        </div>

        <form onSubmit={handleSubmit} className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'>
            <label htmlFor='recipeName'>Name :</label>
            <input
             type="text"
              id='recipeName'
               placeholder='Enter recipe name'
                name='recipeName'
                 value={data.recipeName}
                  onChange={handleOnChange} 
                className='p-2 bg-slate-100 border rounded tracking-wider' required
            />

<label htmlFor='category' className='mt-3'>Category :</label>
<select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
<option value={""}>Select Category</option>
    {
        productCategory.map((el,index)=>{
            return (
                <option value={el.value} key={el.value+index}>{el.label}</option>
            )
        })
    }
</select>

<label htmlFor='thumbnailImage' className='mt-3'>Thumbnail Image :</label>

<label htmlFor='uploadImageInput'>
<div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
<div className='text-slate-500 flex justify-center items-center flex-col gap-2'>

<span className='text-4xl'><FaCloudUploadAlt /></span>
<p className='text-sm'>Upload Recipe Image</p>
<input type="file" id='uploadImageInput' className='hidden' onChange={handleUploadRecipe} />
</div>
</div>
</label>

<div>
{
    data?.thumbnailImage[0] ? (
        <div className='flex items-center gap-2'>
            {
                data.thumbnailImage.map((el,index)=>{
            return (
                <div className='relative group'>
                    <img src={el} alt={el} width={80} height={80} className='bg-slate-100 border cursor-pointer' onClick={()=>{
                    setOpenFullScreenImage(true)
                    setFullScreenImage(el)

                }} />
                <div onClick={(index)=>handleDeleteRecipeImage()} className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer'>
                <MdDelete />
                </div>
                </div>
            )
        })
            }
        </div>
    ) : (
        <p className='text-red-600 text-xs'>*Please upload image</p>
    )
}
    
</div>

<label htmlFor='instructions' className='mt-3'>Instructions :</label>
<p className="text-sm text-gray-500">Please provide step-by-step instructions for making the recipe.</p>
                    <textarea
                        id='instructions'
                        name='instructions'
                        value={data.instructions}
                        onChange={handleOnChange}
                        rows="6"
                        className='h-24 w-full p-3 border border-gray-300 bg-slate-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 tracking-wider'
                        placeholder='Step 1: Preheat the oven to 350°F...'
                    />

                     {/* Ingredients Section */}
                     <div className="mt-4">
                        <label className='block text-lg font-medium text-gray-700'>Ingredients:</label>
                        <div className="flex gap-2 mt-2">
                            <input
                                type="text"
                                name="name"
                                value={ingredient.name}
                                onChange={handleIngredientChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ingredient name"
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={ingredient.quantity}
                                onChange={handleIngredientChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Quantity"
                            />
                            <button
                                type="button"
                                onClick={addIngredient}
                                className="px-3 py-2 bg-green-500 text-white rounded-md"
                            >
                                Add
                            </button>
                        </div>

                        {/* Display Ingredients */}
                        <ul className="mt-3 space-y-2">
                            {data.ingredients.map((ing) => (
                                <li key={ing._id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                                    <span>{ing.name} - {ing.quantity}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeIngredient(ing._id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

<button className='px-3 py-2 mb-10 bg-red-600 hover:bg-red-700 text-white'>
    Upload Recipe
</button>
        </form>
        </div>

        {/* Display image full screen */}

        {
            openFullScreenImage && (
                <DisplayImage onClose={()=>setOpenFullScreenImage(false)} imgUrl={fullScreenImage}/>
            )
        }

        


    </div>
  )
}

export default UploadRecipe