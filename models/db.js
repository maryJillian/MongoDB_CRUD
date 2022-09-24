const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',
  {useNewUrlParser: true},
  (error) => {
  if (!error) {
    console.log('MongoDB Connection Succeeded.')}
  else {
    console.log('Error in DB connection: ' + error)
  }
  });

require('./employee.model');