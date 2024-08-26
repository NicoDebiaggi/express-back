export const calculateQuote = (
  carMakerId: number,
  carModelId: number,
  clientName: string,
  driverExperience: number,
  driverAge: number
) => {
  // Get the weight for the car model from the database
  const carModelBaseQuote = /* getCarModelWeight(carModelId) */ 100;

  // Calculate the quote based on the input parameters
  let quote = carModelBaseQuote;
  if (driverExperience < 3) {
    quote = quote * 1.2;
  }
  if (driverExperience < 1) {
    quote = quote * 1.5;
  }
  if (driverAge < 20) {
    quote = quote * 1.4;
  }
  if (driverAge < 25) {
    quote = quote * 1.2;
  }

  return quote
}
