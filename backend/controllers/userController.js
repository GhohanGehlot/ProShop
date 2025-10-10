import asyncHandler from "../middlewares/asyncHandle.js"
import User from "../models/userModels.js"




export const authUser = asyncHandler(async (req , res) => {
    res.send("Auth user");
})


export const registerUser = asyncHandler(async (req , res) => {
    res.send("Register user");
});


export const logoutUser = asyncHandler(async (req , res) => {
    res.send("Logout user");
});

export const getUserProfile = asyncHandler(async (req , res) => {
    res.send("get User profile");
});


export const updateUserProfile = asyncHandler(async (req , res) => {
    res.send("update user profile");
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

