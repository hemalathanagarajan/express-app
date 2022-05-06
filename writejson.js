const fs = require('fs');
// STEP 1: Load JSON file
const users = require('./patient');

// Defining new user
let user = {
  name: 'kumar',
  age: 29,
  gender:'male',
};
// STEP 2: Adding new data to users object
users.push(user);
// STEP 3: Writing to a file
fs.writeFile('patient.json', JSON.stringify(users), (err) => {
    // Checking for errors
    if (err) throw err;
  
    console.log('patient added'); // Success
  });