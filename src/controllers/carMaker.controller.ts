import { Request, Response } from 'express'
import { getCarMakersQuery , createCarMakerQuery, updateCarMakerQuery, deleteCarMakerQuery } from '../querys'

export const getCarMakers = async (_req: Request, res: Response) => {
  try {
    const filterString = _req.query.filter as string
    const notes = await getCarMakersQuery(filterString)
    res.json(notes)
  } catch (error) {
    res.json({ error })
  }
}

export const createCarMaker = async (req: Request, res: Response) => {
  try {
    const { carMakerName, carModelList } = req.body
    const note = await createCarMakerQuery(carMakerName, carModelList)
    res.json(note)
  } catch (error) {
    res.json({ error })
  }
}

export const updateCarMaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { carMakerName, carModelList } = req.body
    const note = await updateCarMakerQuery(parseInt(id), carMakerName, carModelList)
    res.json(note)
  } catch (error) {
    res.json({ error })
  }
}

export const deleteCarMaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const note = await deleteCarMakerQuery(parseInt(id))
    res.json(note)
  } catch (error) {
    res.json({ error })
  }
}
