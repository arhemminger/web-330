/*
============================================
; Title:  Classes
; Author: Andrew Hemminger
; Date:   20 February 2019
; Description: Discussion Board 1.1 - Classes
;===========================================
*/

// constructor function with three fields
function employee (first, last, title) {
  this.first = first,
  this.last = last,
  this.title = title
}

// adds a property to the employee function
employee.prototype.company = 'Bellevue'

// creates a new object which prototype is employee
var ben = new employee ('Ben', 'Franklin', 'Developer')

console.log(ben.company); // => 'Bellevue'
