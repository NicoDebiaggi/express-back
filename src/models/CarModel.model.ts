export type CarModel = {
  name: string
}

export type CarModelWithId = CarModel & {
  id: number
  makerId: number
}