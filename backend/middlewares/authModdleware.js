import jwt  from "jsonwebtoken";
import asyncHandler from "./asyncHandle.js";
import User from "../models/userModels.js";

//Protect routes

 const protect = asyncHandler(async (req , res , next) => {
    let token;

    //read the jwt from cookie

    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRET );
          req.user =  await User.findById(decoded.userId).select('-password');
          next();

        } catch (error) {
            console.log(error);
            res,status(401);
            throw new Error('Not authorised , token failed')
        }

    }else{
        res.status(401);
        throw new Error('Not authorised  , no token')   
    }
})


//admin middleware

const admin = (req , res , next) => {
    if(req.user.isAdmin && req.user){



    }else{
        res.status(401);
        throw new Error('Not authorised as Admin')
    }
}

export { protect , admin} ;