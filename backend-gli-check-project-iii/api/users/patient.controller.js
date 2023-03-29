const { createPatient, getPatients, getPatientByPatientId, updatePatient, deletePatient } = require("./patient.service");

const { sign } = require("jsonwebtoken");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    createP: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createPatient(body, (err, results) => {
            if (err) {
                console.log("[mysql error]", err);
                return;
            }
            return res.json({
                success: 1,
                message: "Utilizador registado com sucesso!"
            });
        });
    },
    getPatients: (req, res) => {
        getPatients((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getPatientByPatientId: (req, res) => {
        const id = req.params.id;
        getPatientByPatientId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Utilizador não encontrado"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updatePatient: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updatePatient(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Erro ao atualizar os dados do utilizador"
                });
            }
            return res.json({
                success: 1,
                message: "Dados do utilizador atualizados com sucesso"
            });
        });
    },
    deletePatient: (req, res) => {
        const id = req.params.id;
        deletePatient(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Utilizador não encontrado"
                });
            }
            return res.json({
                success: 1,
                message: "Utilizador removido com sucesso"
            });
        });
    }
}
