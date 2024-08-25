import { Request, Response } from 'express'
import { calculateQuote } from '../utils'

export const getQuote = (req: Request, res: Response) => {
  const { carMakerId, carModelId, clientName, driverExperience, driverAge } = req.body

  const quote = calculateQuote(carMakerId, carModelId, clientName, driverExperience, driverAge)
  
  res.json(quote)
}