function Util() {

  const calculateTotalDistributedPassengers = (distributedObj) => {
    let totalDistributedPassengers = 0 
    for ( let value in distributedObj){
      totalDistributedPassengers += distributedObj[value]
    }

    return totalDistributedPassengers
  }

  return {calculateTotalDistributedPassengers}
}

export default Util()