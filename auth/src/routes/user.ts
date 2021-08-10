import { UserController } from '../controller/UserController';
import { Router } from 'express';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from '../middlewares/rol';

const router = Router();

//get all users

router.get('/',[checkJwt, checkRole(['admin'])], UserController.getAll);

//get one user
router.get('/:id',[checkJwt, checkRole(['admin'])], UserController.getById);

//create one user
router.post('/',[checkJwt, checkRole(['admin'])], UserController.newUser);

// edit user
router.patch('/:id',[checkJwt, checkRole(['admin'])],UserController.editUser);
// delete
router.delete('/:id',[checkJwt, checkRole(['admin'])], UserController.deleteUser);

export default router;
