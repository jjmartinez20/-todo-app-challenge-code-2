import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router: Router = Router();
const usersController: UsersController = new UsersController();

router.get('/', usersController.findAll);
router.get('/:id', usersController.findById);
router.put('/:id', usersController.updateUser);
router.put('/changepassword/:id', usersController.updatePassword);
router.delete('/:id', usersController.deleteUser);
router.post('/', usersController.createUser);
router.post('/login', usersController.Login);

export default router;