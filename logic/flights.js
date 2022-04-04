function Flights() {
  const calculateNumberOfFlights = (numberOfPassengers,flightCapacity ) => {
    if (flightCapacity % numberOfPassengers === 0){
      return flightCapacity / numberOfPassengers
    }
    return flightCapacity / numberOfPassengers + 1
  }
  return {calculateNumberOfFlights}
}

module.exports = Flights();