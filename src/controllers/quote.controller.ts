import { Request, Response, NextFunction } from 'express'
import { calculateQuote } from '../utils'

export const getQuote = (req: Request, res: Response, next: NextFunction) => {
  const { carMakerId, carModelId, clientName, driverExperience, driverAge } =
    req.body

  const quote = calculateQuote(
    carMakerId,
    carModelId,
    clientName,
    driverExperience,
    driverAge
  )

  if (typeof quote !== 'number') {
    const error = new Error('Error calculating quote')
    return next(error)
  }

  res.json({
    weeklyPrice: quote
  })
}
