import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getCarMakersQuery = async (filterString?: string) => {
  if (filterString) {
    const carMakers = await prisma.carMaker.findMany({
      where: {
        OR: [
          {
            name: {
              contains: filterString
            }
          }
        ]
      },
      include: {
        CarModel: true
      }
    })
    prisma.$disconnect()
    return carMakers
  } else {
    const carMakers = await prisma.carMaker.findMany({
      include: {
        CarModel: true
      }
    })
    prisma.$disconnect()
    return carMakers
  }
}

type CarModel = {
  name: string
}

type CarModelWithId = CarModel & {
  id: number
  makerId: number
}

export const createCarMakerQuery = async (carMakerName: string, carModelList: CarModel[]) => {
  const carMaker = await prisma.carMaker.create({
    data: {
      name: carMakerName,
    }
  })
  const carModelListWithId = carModelList.map((carModel) => {
    return {
      ...carModel,
      makerId: carMaker.id
    }
  })
  const carModels = await prisma.carModel.createMany({
    data: carModelListWithId
  })
  prisma.$disconnect()
  return {
    ...carMaker,
    CarModel: carModels
  }
}

export const updateCarMakerQuery = async (id: number, carMakerName: string, carModelList: CarModelWithId[]) => {
  const carMaker = await prisma.carMaker.update({
    where: {
      id
    },
    data: {
      name: carMakerName,
      CarModel: {
        deleteMany: {},
        create: carModelList
      }
    }
  })
  prisma.$disconnect()
  return carMaker
}

export const deleteCarMakerQuery = async (id: number) => {
  const carMaker = await prisma.carMaker.delete({
    where: {
      id
    }
  })
  prisma.$disconnect()
  return carMaker
}