import { Router } from "express"
import { getCarMakers, createCarMaker, updateCarMaker, deleteCarMaker } from "../controllers"

export const carMakerRouter = Router()

carMakerRouter.get('/', getCarMakers)
carMakerRouter.post('/', createCarMaker)
carMakerRouter.put('/:id', updateCarMaker)
carMakerRouter.delete('/:id', deleteCarMaker)
