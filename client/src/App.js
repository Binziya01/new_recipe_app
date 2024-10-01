import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./components/ErrorPage";
import Header from './components/header/Header';
import Search from './pages/Search';
import CategoryPage from './pages/category/CategoryPage';
import AdminLayout from './components/admin-view/Layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRecipe from './pages/admin/Recipe';
import CheckAuth from './components/common/CheckAuth';
import UnAuthPage from './pages/UnAuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/authSlice';
import CreateCategory from './pages/admin/CreateCategory';
import CategoryRecipe from './pages/CategoryRecipe';
import RecipeDetails from './pages/RecipeDetails';
import AllRecipes from './pages/user-view/AllRecipes';
// import { Outlet } from 'react-router-dom';
// import Header from './components/header/Header';


function App() {

  const {user, isLoggedIn, loading} = useSelector(state=> state.auth)
   const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(loading) return <div>Loading...</div>

  console.log(loading, user);
  

  return (
    <div className="max-w-screen-2xl mx-auto">
    <Header/>
    <Outlet/>
    <Routes>
    <Route
          path="/"
          element={
            <Home/>
          }
        />
      {/* <Route path="/" element=<Home/>/> */}

      <Route path="/login" element={<CheckAuth isLoggedIn={isLoggedIn} user={user}><Login/></CheckAuth>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/error" element={<ErrorPage/>}/>
      <Route path='/unauth-page' element={<UnAuthPage/>}/>

      <Route path='/search' element={<Search/>}/>
      <Route path='/recipes/:id' element={<RecipeDetails/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
      <Route path='/recipes' element={<AllRecipes/>}/>

      <Route path='recipe-category/:categoryName' element={<CategoryRecipe/>}/>


      <Route path="/dashboard" element={
         <CheckAuth isLoggedIn={isLoggedIn} user={user}>
              <AdminLayout />
            </CheckAuth>
      }>
      {/* <Route index element={<AdminDashboard/>}/> */}
      <Route path="admin" element={<AdminDashboard/>}/>
      <Route path="admin/create-category" element={<CreateCategory/>}/>
      <Route path="admin/recipe" element={<AdminRecipe/>}/>
      </Route>

    </Routes>
   
    </div>
  );
}

export default App;
