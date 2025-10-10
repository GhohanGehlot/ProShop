import express from 'express';
import { authUser, deleteUsers, getUserById, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';
const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.post('/logout' , logoutUser);
router.post('/login' , authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUsers).get(getUserById).put(updateUser)


export default router; 