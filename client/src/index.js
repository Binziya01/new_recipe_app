import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './pages/home/Home';
// import ErrorPage from './components/ErrorPage';
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import CategoryPage from './pages/category/CategoryPage';
// import Search from './pages/Search';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
// import { PrivateRoute } from './components/routes/PrivateRoute';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import AdminLayout from './components/admin-view/Layout';
// import AdminRecipe from './pages/admin/Recipe';

// const router = createBrowserRouter([
//   {
//     path: "/", element:<App/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//       path: "/", element:<Home/>
//     },
//     {
//       path:"/dashboard", element:<PrivateRoute/>
//     },
//     {
//       path: "/categories/:category",
//       element: <CategoryPage/>
//     },
//     {
//       path: "/search",
//       element: <Search/>
//     },
//     {
//       path:"/signup", element:<Signup/>
//     },
//     {
//       path:"/login", element:<Login/>
//     },
//     {
//       path:"/admin", element:<AdminLayout/>     
//     },
//     {
//       path:"/admin/dashboard", element:<AdminDashboard />
//     },
//     {
//       path:"/admin/recipe", element:<AdminRecipe/>
//     }
//   ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  
  // <Provider store={store}>
  //   <RouterProvider router={router}/>
  // </Provider>

  <BrowserRouter>
   <Provider store={store}>
   <App/>
   </Provider>
  </BrowserRouter>
  
);


