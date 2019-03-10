/*
============================================
; Title:  The Factory Pattern
; Author: Professor Krasso
; Date:  10 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 3.2 – Prototypes
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.2'));
console.log("");

// start program
// initiate functions for databases populated with default property values.
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle(properties) {
  this.username = properties.username || "developer";
  this.password = properties.password || "dev12345";
  this.server = properties.server || "localhost:54300";
  this.version = properties.version || "18.1.0";
}

function Informix (properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "pass12345";
  this.server = properties.server || "localhost:13400";
}

// calling DatabaseFactory function
function DatabaseFactory() {}

// set database class based on database type.
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === 'MySql') {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === 'Oracle') {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === 'Informix') {
    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};

// creating databases and adding property values.
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "admin"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password"
});

// output formatted database information for Oracle and Informix.
console.log(
  Oracle.name + " {\n username: '" + oracle.username + "',\n password: '" + oracle.password + "',\n server: '" + oracle.server + "',\n version: '" + oracle.version + "'\n}"
);

console.log("");

console.log(
  Informix.name + " {\n username: '" + informix.username + "',\n password: '" + informix.password + "',\n server: '" + informix.server + "'\n}"
);
// end program
