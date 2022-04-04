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


const checkAircraftRevision = (distanceLimit, distanceArray) => {
   let totalDistance = distanceArray.reduce((a,b) => a + b)

     if (totalDistance > distanceLimit){
    throw new Error("Cannot fly")
  }


  if (totalDistance <= distanceLimit / 2){
    return "The revision needs to be done within the next 3 months"
  } else if (totalDistance <= (3 * distanceLimit / 4)){
    return "The revision needs to be done within the next 2 months"
  } else {
    return  "The revision needs to be done within the next month"
  }
}


  return {calculateNumberOfFlights, checkAircraftRevision}
}

module.exports = Flights();