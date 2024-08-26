import { Router } from 'express'
import { getQuote } from '../controllers'

export const quoteRouter = Router()

quoteRouter.post('/', getQuote)