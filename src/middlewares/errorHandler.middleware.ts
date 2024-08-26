import { Request, Response, NextFunction } from 'express'

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err)

  res.status(400)

  res.json({ error: err.message })
}
