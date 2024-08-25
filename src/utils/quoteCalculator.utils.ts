export const calculateQuote = (
  carMakerId: number,
  carModelId: number,
  clientName: string,
  driverExperience: number,
  driverAge: number
) => {
  // This is a dummy implementation of a quote calculation
  // The actual implementation would depend on the business logic
  const quote = {
    carMakerId,
    carModelId,
    clientName,
    driverExperience,
    driverAge,
    quote: Math.floor(Math.random() * 1000)
  }
  return quote
}
