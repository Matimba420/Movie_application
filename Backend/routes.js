const { Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
// router.put('/:id', controller.updateUserByEmail);
// router.put('/:id', controller.updateUserByPassword);
router.delete('/:id', controller.deleteUser);
// router.get('/user', controller.checkUser);

module.exports = router;