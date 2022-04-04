function Passengers() {

 const checkFlightCapacity = (flightCapacity, passengersArray) => {
   let totalPassengers = passengersArray.reduce((a,b) => a + b)

   if (totalPassengers < flightCapacity){
     return totalPassengers
   } else throw new Error ("Number of Passengers exceeds flight Capacity")
 }

 return {checkFlightCapacity}
}


module.exports = Passengers()