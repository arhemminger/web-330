/*
============================================
; Title:  Prototypes
; Author: Professor Krasso
; Date:  2 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 2.2 – Prototypes
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.2'));
console.log('\n');

// start program
// variable created to return an age value
var person =
{
    getAge: function ()
    {
        return this.age;
    }
};

// variable created as an object with age and fullname values set.
var andrew = Object.create(person, {
    "age":
    {
        "value": "32"
    },
    "fullname":
    {
        "value": "Andrew Hemminger"
    }
});

// calling function against andrew object
andrew.getAge();

// output for person name and age
console.log("The person's full name is '%s'.", andrew.fullname);
console.log("The person's age is '%s'.", andrew.age);


// end program
