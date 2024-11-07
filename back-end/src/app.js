import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

/***************** ROTAS *************************** */
import ongsRouter from './routes/ongs.js'
app.use('/ongs', ongsRouter)

import especiesRouter from './routes/especies.js'
app.use('/especies', especiesRouter)

import racasRouter from './routes/racas.js'
app.use('/racas', racasRouter)

import animaisRouter from './routes/animais.js'
app.use('/animais', animaisRouter)

import adocoesRouter from './routes/adocoes.js'
app.use('/adocoes', adocoesRouter)

import imagensAnimalRouter from './routes/imagensAnimal.js'
app.use('/imagensAnimal', imagensAnimalRouter)

import imagensOngRouter from './routes/imagensOng.js'
app.use('/imagensOng', imagensOngRouter)

export default app
