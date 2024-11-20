import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path';
import cors from 'cors'

import indexRouter from './routes/index.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

/**ACESSO DAS IMAGENS ATRAVÉS DO SERVIDOR */
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use('/public', express.static(path.join(__dirname, 'public')));

/**ACESSO DAS IMAGENS LOCALMENTE */
/** SE VOCÊ FOR USAR O PROJETO LOCALMENTE FAÇA O SEGUINTE PROCEDIMENTO:
 * 1. COMENTE AS DUAS LINHAS ACIMA
 * 2. DESCOMENTE A LINHA ABAIXO
 * 3. ACESSE O DIRETÓRIO DE ONDE SALVOU O PROJETO E SUBSTITUA OS VALORES DO CAMINHO DA LINHA ABAIXO, PELO DA SUA MÁQUINA LOCAL
 * APENAS MANTENHA O DSM-G06-PI3-2024-2, 'back-end', 'src', 'public'.
 */
// app.use('/public', express.static(path.join('C:', 'Users', 'henri', 'OneDrive', 'Área de Trabalho', 'paws_safety3', 'DSM-G06-PI3-2024-2', 'back-end', 'src', 'public')));

app.use(cors())

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

import imagensAnimalRouter from './routes/imagens-animal.js'
app.use('/imagensanimal', imagensAnimalRouter)

import imagensOngRouter from './routes/imagens-ong.js'
app.use('/imagensong', imagensOngRouter)

export default app
