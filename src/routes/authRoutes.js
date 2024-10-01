import express from "express"
import { signUp, login, testController, logout, authMiddleware } from "../controllers/authController.js"
import { isAdmin, isLoggedIn } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)
router.post("/logout", logout)
// middleware test route
router.get("/test",isLoggedIn, isAdmin, testController)

router.get('/check-auth',isLoggedIn, (req,res)=>{
    const user = req.user
    res.status(200).json({
        success: true,
        message: 'Authenticated user!',
        user 
    })
})

// protected user authentication route auth
router.get("/user-auth",isLoggedIn,(req,res)=>{
    res.status(200).json({
        ok:true
    })
})

// protected admin authentication route
router.get("/admin-auth",isLoggedIn,isAdmin,(req,res)=>{
    res.status(200).json({
        ok:true
    })
})


export default router