import db from '../config/db.js'

export const getAllCourses = async () => {
    const [courses] = await db.query(`SELECT * FROM courses`)
    .catch(err => console.log(err))
    return {success: true, status:200, message: courses}
}

export const getCourseById = async (id) => {
    const [course] = await db.query(`SELECT * FROM courses WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (course.length === 0)
        return {success: false, status:404, message: `There is no course with Id = ${id}`}
    else
        return {success: true, status:200, message: course}
}

export const deleteCourse = async (id) => {
    const [{affectedRows}] = await db.query(`DELETE FROM courses WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (affectedRows == 0)
        return {success: false, status:404, message: `There is no course with Id = ${id}`}
    else
        return {success: true, status:200, message: `Course deleted successfully`}
}

export const insertCourse = async (course) => {
    const [us] = await db.query(`SELECT * FROM courses WHERE code = '${course.code}'`)
    .catch(err => console.log(err))
    if (us.length > 0)
        return {success: false, status:404, message: `This 'code' key is already taken`}

    await db.query('INSERT INTO courses SET ?', [course])
    .catch((err) => console.log(err))
    return {success: true, status:200, message: "Course inserted successfully"}
}

export const updateCourse = async (course, id) => {
    const [row] = await db.query(`SELECT * FROM courses WHERE id = ${id}`)
    .catch(err => console.log(err))
    if (row.length === 0)
        return {success: false, status:404, message: `There is no course with Id ${id}`}

    const [us] = await db.query(`SELECT * FROM courses WHERE code = '${course.code}' AND id != ${id}`)
    .catch(err => console.log(err))
    if (us.length > 0)
        return {success: false, status:404, message: `This 'code' key is already taken`}

    course.updatedAt = new Date()
    await db.query(`UPDATE courses SET ? WHERE id = ${id}`, [course])
    .catch(err => console.log(err))
    return {success: true, status:200, message: "Course updated successfully"}
}

