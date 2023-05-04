const passwordValidator = require("password-validator");
const AWS = require("aws-sdk");

const config = require("../config");

function validatePassword(password) {
  const schema = new passwordValidator();
  schema
    .is()
    .min(6) // Minimum length 6
    .is()
    .max(100); // Maximum length 100

  return schema.validate(password);
}

async function getLocation(obj) {
  if (obj.address) {
    const location = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${obj.address}&key=${config.GOOGLE_TOKEN}`)
    const response = await location.json();
    
    if (response && response.results && response.results.length > 0) {
      obj.address = response.results[0].formatted_address;
      obj.location = response.results[0].geometry.location;
    }
  }

  return obj;
}

module.exports = {
  validatePassword,
  getLocation,
};
