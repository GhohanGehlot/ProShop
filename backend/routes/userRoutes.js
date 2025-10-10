import express from 'express';
import { authUser, deleteUsers, getUserById, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';
import { protect , admin } from '../middlewares/authModdleware.js';
const router = express.Router();

router.route('/').post(registerUser).get(protect , admin ,getUsers);
router.post('/logout' , logoutUser);
router.post('/auth' , authUser);
router.route('/profile').get(protect ,getUserProfile).put(protect ,updateUserProfile);
router.route('/:id').delete(protect , admin ,deleteUsers).get(protect , admin ,getUserById).put(protect , admin ,updateUser)


export default router; 