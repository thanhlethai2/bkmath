import express from 'express'
const router = express.Router()
import { getAllPosts, getPostById, deletePost, insertPost, updatePost } from './post.service.js'

router.get('/', async (req, res) => {
    const result = await getAllPosts()
    res.status(result.status).send(result.message)
})

router.get('/:id', async (req, res) => {
    const result = await getPostById(req.params.id)
    res.status(result.status).send(result.message)
})

router.delete('/:id', async (req, res) => {
    const result = await deletePost(req.params.id)
    res.status(result.status).send(result.message)
})

router.post('/', async (req, res) => {
    const result = await insertPost(req.body)
    res.status(result.status).send(result.message)
})

router.put('/:id', async (req, res) => {
    const result = await updatePost(req.body, req.params.id)
    res.status(result.status).send(result.message)
})

export default router