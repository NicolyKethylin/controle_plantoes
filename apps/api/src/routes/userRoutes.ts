import  express  from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

//user routes
router.get('/', userController.userList);
router.get('/:id', userController.searchUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;