import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
        const request = await axios.post("http://localhost:4000/api/v1/auth/login",userCredentials)
        const response = await request.data
        console.log(response,"logged in");
        
        localStorage.setItem("user",JSON.stringify(response.user))
        localStorage.setItem("token",response.token)
        return response
        

    }
)

export const checkAuth=createAsyncThunk(
    'auth/userAuth',
    async(userCredentials)=>{
        const request = await axios.get("http://localhost:4000/api/v1/auth/check-auth",userCredentials)
        const response = await request.data
        console.log(request,"check");
        
        localStorage.setItem('user',JSON.stringify(response.user))
        localStorage.setItem('token',JSON.stringify(response.token))
        return response

    }
)

// export const adminAuth=createAsyncThunk(
//     'auth/adminAuth',
//     async(userCredentials)=>{
//         const request = await axios.get("http://localhost:4000/api/v1/auth/admin-auth",userCredentials)
//         const response = await request.data
//          console.log(request,"admin logged in");
        
//         localStorage.setItem('user',JSON.stringify(response))
//         return response

//     }
// )

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isLoggedIn:false,
        loading: false,
        user: null,
        token: null,
        error: null

    },
    reducers: {
    setUser: (state, action) => {},
    setToken: (state, action) => {
      state.token = action.payload
    }
},
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload.success ? action.payload.user : null ;
            state.isLoggedIn = action.payload.success
            // console.log(action.payload,"User login");
            
            state.error = null;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.user = null;
            state.isLoggedIn = false
            // console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access Denied! Invalid Credentials'
            }
            else{
                state.error = action.error.message;
            }
            
        })
        .addCase(checkAuth.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(checkAuth.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            // console.log(action.payload,"User login");
            state.isLoggedIn = action.payload.success
            state.error = null;
        })
        .addCase(checkAuth.rejected,(state,action)=>{
            state.loading = false;
            state.user = null;
            state.isLoggedIn = false
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access Denied! Invalid Credentials'
            }
            else{
                state.error = action.error.message;
            }
            
        })
        // .addCase(adminAuth.pending,(state)=>{
        //     state.loading = true;
        //     state.user = null;
        //     state.error = null;
        // })
        // .addCase(adminAuth.fulfilled,(state,action)=>{
        //     state.loading = false;
        //     state.user = action.payload;
        //     state.isLoggedIn = action.payload.success
        //     // console.log(action.payload,"admin login");
            
        //     state.error = null;
        // })
        // .addCase(adminAuth.rejected,(state,action)=>{
        //     state.loading = false;
        //     state.user = null;
        //     state.isLoggedIn = false
        //     // console.log(action.error.message);
        //     if(action.error.message === 'Request failed with status code 401'){
        //         state.error = 'Access Denied! Invalid Credentials'
        //     }
        //     else{
        //         state.error = action.error.message;
        //     }
            
        // })
    }
})
export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer