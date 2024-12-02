import argon2 from 'argon2'
import db from '../config/db.js'

export const getAllUsers = async () => {
    const [users] = await db.query(`SELECT * FROM users`)
    .catch(err => console.log(err))
    return {success: true, status:200, message: users}
}

export const getUserById = async (id) => {
    const [user] = await db.query(`SELECT * FROM users WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (user.length === 0)
        return {success: false, status:404, message: `There is no user with Id = ${id}`}
    else
        return {success: true, status:200, message: user[0]}
}

export const deleteUser = async (id) => {
    const [{affectedRows}] = await db.query(`DELETE FROM users WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (affectedRows == 0)
        return {success: false, status:404, message: `There is no user with Id = ${id}`}
    else
        return {success: true, status:200, message: `User deleted successfully`}
}

export const insertUser = async (user) => {

    const [us] = await db.query(`SELECT * FROM users WHERE username = '${user.username}'`)
    .catch(err => console.log(err))
    if (us.length > 0)
        return {success: false, status:404, message: `This 'username' key is already taken`}

    const [em] = await db.query(`SELECT * FROM users WHERE email = '${user.email}'`)
    .catch(err => console.log(err))
    if (em.length > 0)
        return {success: false, status:404, message: `This 'email' key is already taken`}

    user.password = await argon2.hash(user.password);
    await db.query(`INSERT INTO users SET ?`, [user])
    .catch((err) => console.log(err))
    return {success: true, status:200, message: `User created successfully`}
}

export const updateUser = async (user, id) => {
    const [row] = await db.query(`SELECT * FROM users WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (row.length === 0)
        return {success: false, status:404, message: `There is no user with Id = ${id}`}

    const [us] = await db.query(`SELECT * FROM users WHERE username = '${user.username}' AND id != ${id}`)
    .catch(err => console.log(err))
    if (us.length > 0)
        return {success: false, status:404, message: `This 'username' key is already taken`}

    const [em] = await db.query(`SELECT * FROM users WHERE email = '${user.email}' AND id != ${id}`)
    .catch(err => console.log(err))
    if (em.length > 0)
        return {success: false, status:404, message: `This 'email' key is already taken`}

    const properties = Object.getOwnPropertyNames(user)
    if ('password' in properties)
        user.password = await argon2.hash(user.password);
    user.updatedAt = new Date()
    await db.query(`UPDATE users SET ? WHERE id = ${id}`, [user])
    .catch(err => console.log(err))
    return {success: true, status:200, message: `User updated successfully`}
}

