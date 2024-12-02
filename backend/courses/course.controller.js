import express from 'express'
const router = express.Router()
import { getAllCourses, getCourseById, deleteCourse, insertCourse, updateCourse } from './course.service.js'

router.get('/', async (req, res) => {
    const result = await getAllCourses()
    res.status(result.status).send(result.message)
})

router.get('/:id', async (req, res) => {
    const result = await getCourseById(req.params.id)
    res.status(result.status).send(result.message)
})

router.delete('/:id', async (req, res) => {
    const result = await deleteCourse(req.params.id)
    res.status(result.status).send(result.message)
})

router.post('/', async (req, res) => {
    const result = await insertCourse(req.body)
    res.status(result.status).send(result.message)
})

router.put('/:id', async (req, res) => {
    const result = await updateCourse(req.body, req.params.id)
    res.status(result.status).send(result.message)
})

export default router