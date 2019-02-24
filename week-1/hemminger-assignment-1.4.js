/*
============================================
; Title:  Duck Typing, A.K.A “Interfaces”
; Author: Professor Krasso
; Date:  24 February 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.4 – Duck Typing, A.K.A “Interfaces”
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 1.4'));
console.log('\n');

// start program
// function taking one parameter value to create a car
function Car(model)
{
    this.model = model;
}

Car.prototype.start = function()
{
      console.log("Car added to the racetrack!");
}

// function taking two parameter values to create a truck
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function()
{
      console.log("Truck added to the racetrack!");
}

// function taking three parameter values to create a jeep
function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function()
{
      console.log("Jeep added to the racetrack!");
}

// array to house vehicles added
var racetrack = [];

// function to add specified vehicle to the racetrack and display log output
function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

// variables to create vehicles
var wrxSti = new Car("Wrx Sti");
var chevyAvalanche = new Truck("Avalanche", "2004");
var wrangler = new Jeep("Wrangler", "2019", "Grey");

console.log("");

// calling the function to add vehicles and display log output to confirm
driveIt(wrxSti);
driveIt(chevyAvalanche);
driveIt(wrangler);

console.log("\n-- The following vehicles have been added to the racetrack --");

for (var i = 0; i < racetrack.length; i++)
{
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program

