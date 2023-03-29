const pool = require("../../config/database");

module.exports = {
    //-- OK
    createPatient: (data, callBack) => {
        pool.query(
            `INSERT INTO glicheck_projeto_3.user(email, username, password, first_name, last_name, country_code_id, phone_number, address, role_user_id, created_date, updated_date, deleted_date, deleted_flag)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp(), ?, ?, 'N');`,
            [
                data.email,
                data.username,
                data.password,
                data.first_name,
                data.last_name,
                data.country_code_id,
                data.phone_number,
                data.address,
                data.role_user_id,
                data.created_date,
                data.updated_date,
                data.deleted_date,
                data.deleted_flag
            ],
            (error, results, fields) => {
                if (error)
                    return callBack(error);
                return callBack(null, results);
            }
        );
    },
    //-- OK
    getPatients: callBack => {
        pool.query(
            `SELECT * FROM glicheck_projeto_3.user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    //-- OK
    getPatientByPatientId: (id, callBack) => {
        pool.query(
            `SELECT * FROM glicheck_projeto_3.user
                WHERE 1=1
                    AND id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    // -- OK (nao atualiza nada se meter o "CURRENT_TIMESTAMP"...nao sei como meter a data atual no updated_date) made it a work around
    updatePatient: (data, callBack) => {
        pool.query(
            `UPDATE glicheck_projeto_3.user
                SET email=?, username=?, password=?, first_name=?, last_name=?, country_code_id=?, phone_number=?, address=?, updated_date=?, deleted_date=?, deleted_flag=?
                WHERE 1=1
                    AND id=?`,
            [
                data.email,
                data.username,
                data.password,
                data.first_name,
                data.last_name,
                data.country_code_id,
                data.phone_number,
                data.address,
                new Date(),
                data.deleted_date,
                data.deleted_flag,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    //-- OK
    deletePatient: (id, callBack) => {
        pool.query(
            `DELETE FROM glicheck_projeto_3.user
                WHERE 1=1
                    AND id=?`,
            [id],
            (error, results, fields) => {
                if (error)
                    return callBack(error);
                return callBack(null, results);
            }
        );
    }
}
