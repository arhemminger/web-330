/*
============================================
; Title:  Class Refresher
; Author: Professor Krasso
; Date:  24 February 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.3 - Class Refresher
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 1.3'));
console.log('\n');

// start program

// function taking 4 parameter value inputs
function CellPhone(Manufacturer, Model, Color, Price) {
  this.Manufacturer = Manufacturer;
  this.Model = Model;
  this.Color = Color;
  this.Price = Price;

  // function returning CellPhone Price
  this.getPrice = function() {
      return this.Price;
  }

  // function returning CellPhone Model
  this.getModel = function() {
      return this.Model;
  }

  // function returning CellPhone details including all 4 parameter values
  this.getDetails = function() {
      return "Manufacturer; " + this.Manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.Color + "\nPrice: " + this.getPrice();
  }
}

// new object created using CellPhone function
var iPhone = new CellPhone("Apple", "iPhone 7+", "Black", "$849.99");

// outputting new CellPhone object details
console.log(iPhone.getDetails());

// end program
