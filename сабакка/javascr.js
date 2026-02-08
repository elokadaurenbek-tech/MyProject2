//let car1 = {
  //  make: "Toyota",
    //model:'Camry',
    //year: 2021,
    //start: function() {
     //   console.log('Car started')
    ///},
    //stop: function(){
     //   console.log('Car stopped')
    //}
//}


//let car2 = {
 //   make: "Mercedes",
   // model:'W211',
    //year: 2019,
    //start: function() {
     //   console.log('Car started')
    //},
    //stop: function(){
      //  console.log('Car stopped')
    //}
//}


//let car3 = {
  //  make: "BMB",
    //model:'520',
    //year: 1994,
    //start: function() {
      //  console.log('Car started')
   // },
    //stop: function(){
      //  console.log('Car stopped')
    //}
//}

//car.start();
//car.stop();







//  2
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        console.log('${this.make} ${this.model} started');
    }
    stop(){
        console.log('${this.make} ${this.model} stopped');
    }
}

let car1 = new Car('Toyota', 'Camry', 2021);
let car2 = new Car('Mercedes', 'W211', 2019);
let car3 = new Car('BMB', '520', 1994);
car1.start()
class ElectricCar extends Car{
    constructor(make, model, batteyLife){
        super(make, model, year);
        this.batteyLife = batteyLife
    }

    start(){
        console.log('${this.make} ${this.model} with battery life of ${this.bateyLife} started')
    }
}

let ElectricCar1 = new ElectricCar("Tesla", 'Model S', 2022, '100%');
ElectricCar1.start()
