function Flights() {
  const calculateNumberOfFlights = (numberOfPassengers,flightCapacity ) => {
    let numberOfFlights 
    let passengers = Number(numberOfPassengers)
    let capacity  = Number(flightCapacity)


    if ((passengers <= 0 ) || (!Number.isInteger(passengers))){
      throw new Error("The number of Passengers must be a positive integer ")
    }
    
    if ((capacity <= 0 ) || (!Number.isInteger(capacity))){
      throw new Error("The number of flights must be a positive integer ")
    }

    if (passengers % capacity === 0){
        numberOfFlights = passengers / capacity
    } else {
        numberOfFlights =  Math.floor(passengers / capacity) + 1
    }
    return numberOfFlights
  }
  return {calculateNumberOfFlights}
}

module.exports = Flights();