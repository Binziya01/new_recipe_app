import JWT from "jsonwebtoken"
import config from "../config/config.js"
import AuthRoles from "../utils/AuthRoles.js"
import User from "../models/userSchema.js"

export const isLoggedIn = async(req,res,next)=>{
    console.log(req.headers,"token");
    
    try{
        const token = req.headers && req.headers["authorization"].split(" ")[1]
        console.log(token,"token");
        
        const decode =JWT.verify(token,config.JWT_SECRET)
        
    req.user=decode
    console.log("is",decode);
    
    next()

    }catch(error){
        res.status(401).json({error: error})
        console.log("error",error);
    }

}

export const isAdmin = async(req,res,next)=>{
    try{
        const user = await User.findById(req.user._id)
        if(user.role!== AuthRoles.ADMIN){
            return res.status(401).json({
                success:false,
                message:"you are not authorized access"
            })
        }else{
            next()
        }

    }catch(error){
        console.log(error);

    }
}