import db from '../config/db.js'

export const getAllPosts = async () => {
    const [posts] = await db.query(`SELECT * FROM posts`)
    .catch(err => console.log(err))
    return {success: true, status:200, message: posts}
}

export const getPostById = async (id) => {
    const [post] = await db.query(`SELECT * FROM posts WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (post.length === 0)
        return {success: false, status:404, message: `There is no post with Id = ${id}`}
    else
        return {success: true, status:200, message: post}
}

export const deletePost = async (id) => {
    const [{affectedRows}] = await db.query(`DELETE FROM posts WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (affectedRows == 0)
        return {success: false, status:404, message: `There is no post with Id = ${id}`}
    else
        return {success: true, status:200, message: `Post deleted successfully`}
}

export const insertPost = async (post) => {
    await db.query('INSERT INTO posts SET ?', [post])
    .catch((err) => console.log(err))
    return {success: true, status:200, message: "Post inserted successfully"}
}

export const updatePost = async (post, id) => {
    const [row] = await db.query(`SELECT * FROM posts WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (row.length === 0)
        return {success: false, status:404, message: `There is no post with Id ${id}`}

    post.updatedAt = new Date()
    await db.query(`UPDATE posts SET ? WHERE id = ${id}`, [post])
    .catch(err => console.log(err))
    return {success: true, status:200, message: "Post updated successfully"}
}

