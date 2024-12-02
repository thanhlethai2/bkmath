import express from 'express'
const router = express.Router()
import { getAllUsers, getUserById, deleteUser, insertUser, updateUser } from './user.service.js'

router.get('/', async (req, res) => {
    const result = await getAllUsers()
    res.status(result.status).send(result.message)
})

router.get('/:id', async (req, res) => {
    const result = await getUserById(req.params.id)
    res.status(result.status).send(result.message)
})

router.delete('/:id', async (req, res) => {
    const result = await deleteUser(req.params.id)
    res.status(result.status).send(result.message)
})

router.post('/', async (req, res) => {
    const result = await insertUser(req.body)
    res.status(result.status).send(result.message)
})

router.put('/:id', async (req, res) => {
    const result = await updateUser(req.body, req.params.id)
    res.status(result.status).send(result.message)
})

export default router