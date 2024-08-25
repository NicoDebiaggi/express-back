import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { carMakerRouter, quoteRouter } from './routes'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/quote', quoteRouter)
app.use('/carMakers', carMakerRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})