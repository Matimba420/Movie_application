const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
// const getUserByEmail = 'SELECT * FROM users WHERE email = $1';
const checkEmailExists = 'SELECT * FROM users WHERE email = $1';
const addUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
// const checkUser = 'SELECT * FROM users WHERE (email, password) VALUES ($1, $2)';
const searchUser= 'SELECT * FROM users WHERE id = $1';
const deleteUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET name = $1, email = $2, password = $3 where id = $4 returning *';
// const updateUserByEmail = 'UPDATE users SET email = $1 WHERE id = $2';
// const updateUserByPassword = 'UPDATE users SET password = $1 WHERE id = $2';

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser,
    searchUser,
    // checkUser,
    // getUserByEmail,
    // updateUserByEmail,
    // updateUserByPassword,
};