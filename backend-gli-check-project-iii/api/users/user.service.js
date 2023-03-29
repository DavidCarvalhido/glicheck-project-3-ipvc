const pool = require("../../config/database");

module.exports = {
    createUser: (data, callBack) => {
        pool.query(
            `INSERT INTO glicheck_projeto_3.user(username, password, role_user_id)
                VALUES(?, ?, ?)`,
            [
                data.username,
                data.password,
                data.role_ID
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `SELECT
                id,
                username,
                role_user_id
            FROM glicheck_projeto_3.user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `SELECT
                id,
                username,
                role_user_id
            FROM glicheck_projeto_3.user
            WHERE 1=1
                AND id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0])
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE glicheck_projeto_3.user SET username=?, password=?, role_user_id=?
            WHERE 1=1
                AND id=?`,
            [
                data.username,
                data.password,
                data.role_ID,
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
    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM glicheck_projeto_3.user
            WHERE 1=1
                AND id=?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUsername: (username, callBack) => {
        pool.query(
            `SELECT
                username,
                password,
                first_name,
                last_name
            FROM glicheck_projeto_3.user, glicheck_projeto_3.user_role
            WHERE 1=1
                AND user.role_user_id = user_role.id
                AND username = ?`,
            [username],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}
