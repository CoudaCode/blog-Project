import { Router } from 'express';
import withUser from '../middlewares/withUser.js';
import UserController from '../controllers/user.js';

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.post('/login', UserController.loginUser);
userRouter.put('/:id', withUser, UserController.editUser);
userRouter.get('/:id', withUser, UserController.getUser);
userRouter.get('/all', UserController.getAllUser);
userRouter.delete('/:id', withUser, UserController.deleteUser);

export default userRouter;
