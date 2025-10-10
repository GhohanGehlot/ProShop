import asyncHandler from "../middlewares/asyncHandle.js"
import User from "../models/userModels.js"
import generateToken from "../utils/generateToken.js";



export const authUser = asyncHandler(async (req , res) => {
    const { email , password } = req.body;

    const user = await User.findOne({email});


    if(user && (await user.matchPassword(password))){

        generateToken(res , user._id)
        
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin : user.isAdmin,
        })
    }else {
        res.status(401);
        throw new Error('Invalid Email or Password');   
    }

})


export const registerUser = asyncHandler(async (req , res) => {
    const { name , email , password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('User already Exist');

    }

    const user = await User.create({
        name , 
        email,
        password
    });

    if(user){
        generateToken(res , user._id);


        res.status(201).json({
            id: user._id,
            name : user.name,
            email : user.email,
            isAdmin: user.isAdmin,


        });

    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});


export const logoutUser = asyncHandler(async (req , res) => {
    res.cookie('jwt' ,'' ,{
        httpOnly: true,
        expires: new Date(0)
    });
    
    res.status(200).json({message : 'Logged Out successfully'})
    

});

export const getUserProfile = asyncHandler(async (req , res) => {
   const user = await User.findById(req.user._id);

   if(user){
    res.status(200).json({
            id: user._id,
            name : user.name,
            email : user.email,
            isAdmin: user.isAdmin,
    })
   }else{
    res.status(404);
    throw new Error('User not found');
   }
});


export const updateUserProfile = asyncHandler(async (req , res) => {
     const user = await User.findById(req.user._id);

   if(user){
    user.name = req.body.name || user.name;
    user.email = req.body.name || user.email;

    if(req.body.password){
    user.password = req.body.password;
   }

   const updatedUser = await user.save();

res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    });

   } else{
    res.status(404);
    throw new Error('USer not found');
   }

   
});

 
export const getUsers = asyncHandler(async (req , res) => {
    res.send("get users");
});


export const getUserById = asyncHandler(async (req , res) => {
    res.send("get user by id");
})

export const deleteUsers = asyncHandler(async (req , res) => {
    res.send("Delete users");
});


export const updateUser = asyncHandler(async (req , res) => {
    res.send("update user");
});

