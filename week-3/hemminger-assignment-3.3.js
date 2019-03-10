/*
============================================
; Title:  The Singleton Pattern
; Author: Professor Krasso
; Date:  10 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 3.3 – The Singleton Pattern
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 3.3'));
console.log("");

// start program
// creating a database instance for postgres.
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
  }

  return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
  }
 })();

 // function to return the database instance status.
function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    // output the results of instance comparison.
    console.log("Same database instance? %s ", oracle === postgres);
}
// calling the databaseSingletonTest function to compare instance status.
databaseSingletonTest();

// end program
