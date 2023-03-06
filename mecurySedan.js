//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels =4
        this.maximumSpeed= 160
        this.fuel = 10
        this.scheduleService = false
    }  

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!")
        } else {
            console.log("Need to fill up");
        }
    }

    scheduleService(){
        if(this.mileage >30000){
            console.log("time for maintenance")
        }
        else(this.mileage < 30000){
            console.log("no maintenance needed")
        }

    }
}




//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
