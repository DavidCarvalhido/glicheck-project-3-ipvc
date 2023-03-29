const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } = require("./user.controller");

const { createP, getPatients, getPatientByPatientId, updatePatient, deletePatient } = require("./patient.controller");

const router = require("express").Router();
/* const { checkToken } = require("../../auth/token_validation") */

//Rotas do Utilizador
router.post('/', createUser);
//router.get('/', getUsers);
//router.get('/:id', getUserByUserId);
router.patch('/', updateUser);
router.delete('/', deleteUser);
router.post('/login', login);

// Rotas do User
router.post('/new/user', createP);
router.get('/users', getPatients);
router.get('/user/:id', getPatientByPatientId);
router.patch('/update/user/', updatePatient);
router.delete('/delete/user/:id', deletePatient);

module.exports = router;
