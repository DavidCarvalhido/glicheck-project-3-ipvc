const pool = require("../../config/database");

module.exports = {
    createPatient: (data, callBack) => {
        pool.query(
            `INSERT INTO patient(firstName, lastName, address, numberPhone, bloodGlucose, calories, carbohydrates)
                VALUES(?, ?, ?, ?, ?, ?, ?)`,
            [
                data.firstName,
                data.lastName,
                data.address,
                data.numberPhone,
                data.bloodGlucose,
                data.calories,
                data.carbohydrates
            ],
            (error, results, fields) => {
                if (error)
                    callBack(error);
                return callBack(null, results);
            }
        );
    },
    getPatients: callBack => {
        pool.query(
            `SELECT * FROM patient`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getPatientByPatientId: (id, callBack) => {
        pool.query(
            `SELECT * FROM patient WHERE idPatient = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatePatient: (data, callBack) => {
        pool.query(
            `UPDATE patient SET firstName=?, lastName=?, address=?, numberPhone=?, bloodGlucose=?, calories=?, carbohydrates=? WHERE idPatient=?`,
            [
                data.firstName,
                data.lastName,
                data.address,
                data.numberPhone,
                data.bloodGlucose,
                data.calories,
                data.carbohydrates,
                data.idPatient
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletePatient: (id, callBack) => {
        pool.query(
            `DELETE FROM patient WHERE idPatient=?`,
            [id],
            (error, results, fields) => {
                if (error)
                    return callBack(error);
                return callBack(null, results);
            }
        );
    }
}
