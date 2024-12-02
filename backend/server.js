//-------------------------------------------------------------------
//-- DECLARATIONS
//-------------------------------------------------------------------
import express from 'express';
const app = express();
app.use(express.json())
import * as abc from 'express-async-errors' // for async error
import db from './config/db.js'

//-------------------------------------------------------------------
//-- ROUTERS
//-------------------------------------------------------------------
import userRouter from './users/user.controller.js'
import courseRouter from './courses/course.controller.js'
import postRouter from './posts/post.controller.js'
app.use('/api/users', userRouter)
app.use('/api/courses', courseRouter)
app.use('/api/posts', postRouter)

//-------------------------------------------------------------------
//-- FOR ASYNC ERROR
//-------------------------------------------------------------------
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Internal Server Error.')
})

//-------------------------------------------------------------------
//-- INITIALIZATION: PORT AND DB 
//-------------------------------------------------------------------
db.query('SELECT 1')
.then(() => { 
    console.log('db connection succeeded.') 
    app.listen(8000, () => console.log('Server started at 8000 ...'))
})
.catch(err => console.log('db connection fail. \n' + err))
//-------------------------------------------------------------------