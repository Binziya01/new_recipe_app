import { IoSearchOutline } from "react-icons/io5";
import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes } from "../store/recipeSlice";


const Search = () => {
    // const searchText = useParams()
    // const [query, setQuery] = useState('')
    // const [results, setResults] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(()=>{
    //     const params = new URLSearchParams(window.location.search)
    //     const queryParam = params.get('query')
    //     if(queryParam){
    //         setQuery(queryParam)
    //     }
    // },[])

    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.recipes);
  
    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);
  
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading recipes!</p>

    // useEffect(()=>{
    //     const fetchItems = async ()=>{
    //         setLoading(true)
    //         try{
    //             const response = await axios.get("http://localhost:4000/api/v1/auth/items",{
    //                 params: {q: query}
    //          })
    //          setResults(response.data)

    //         }catch(err){
    //             setError(err.message || 'Error fetching data')

    //         }finally{
    //             setLoading(false)
    //         }

    //     }
    // },[query])
  return (
    <div className='px-6 lg:px-12 py-20'>
    <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
    <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
    
            <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-300'/>
            <input className='outline-none w-full placeholder:text-[#1b2629]' name="query" type="search" placeholder='Search for a recipe' id='search' required />
        
    </div>

    <ul>

    </ul>

    </div>
  )
}

export default Search