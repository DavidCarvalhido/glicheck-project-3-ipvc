const { createP, getPatients, getPatientByPatientId, updatePatient, deletePatient, loginUser } = require("./patient.controller");

const router = require("express").Router();
/*const { checkToken } = require("../../auth/toke_validation");*/

//Rotas do Utilizador   -- serão os nomes destas rotas a utilizar 
/*router.post('/', createUser);*/
//router.get('/', getUsers);
//router.get('/:id', getUserByUserId);
/*router.patch('/', updateUser);*/
/*router.delete('/', deleteUser);*/
/*router.post('/login', login);*/

/*router.post('/login', loginUser);*/
router.post('/new/user', createP);  //será a assim out deverá ser /register (?)
router.get('/users', getPatients);
router.get('/user/:id', getPatientByPatientId);
router.patch('/update/user/', updatePatient);
router.delete('/delete/user/:id', deletePatient);

module.exports = router;
