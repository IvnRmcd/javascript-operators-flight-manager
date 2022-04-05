function Util() {

  const calculateTotalDistributedPassengers = (distributedObj) => {
    let totalDistributedPassengers = 0 
    for ( let value in distributedObj){
      totalDistributedPassengers += distributedObj[value]
    }

    return totalDistributedPassengers

  }

const calculateTotalNumberOfPassengers = (passengerArray) => {
    return passengerArray.reduce((a,b) => a + b)
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}
export default Util()