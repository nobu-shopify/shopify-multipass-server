const dotenv = require('dotenv');
const express = require('express');
const multipassify = require('multipassify'); 

const PORT = process.env.PORT || 5000

const NO_EMAIL_ERROR = "You need to specify email address - eg. localhost:5000?email=somoene@somewhere.com";
const NO_SECRET_ERROR = "You need to specify MULTIPASS_SECRET and STORE_URL in your .env file";

const env = dotenv.config();
const app = express();

// Use body-parser to obtain body in JSON
app.use(express.json()); // body-parser settings

// App routes 
app.get('/', (req, res) => {

  // Email is the mandatory field
  if(req.query.email === undefined){
    console.log(NO_EMAIL_ERROR);
    res.status(499).send(NO_EMAIL_ERROR);
  }
  // Ensure .env parameters
  else if(process.env.MULTIPASS_SECRET === undefined
    ||    process.env.STORE_URL === undefined){
      console.log(NO_SECRET_ERROR);
      res.status(498).send(NO_SECRET_ERROR);
    }
  else{
    // Set Multipass params in the URL query into JSON 
    const params = multipass_params(req.query);
    console.log("multipass_params", JSON.stringify(params));

    // Use Multipassify
    // It does:
    // - Add created_at field to the input JSON params
    // - Encrypt the JSON data using AES
    // - Sign the encrypted data using HMAC
    // - Base64 encode the binary data
    // - Provide full URL with valid Multipass token 
    // ... as described in https://shopify.dev/docs/api/multipass
    const mp = new multipassify(process.env.MULTIPASS_SECRET);
    const url = mp.generateUrl(params, process.env.STORE_URL);
    console.log("Multipass URL w/ token", url);

    // Redirect to auto-login
    res.redirect(url);
    // res.status(200).send(url); // Use this if you do not want to redirect
  }
});

// Listen to port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// Set Multipass parameters
const multipass_params = (query) => {
  return {
    email:      query.email,
    first_name: query.first_name,
    last_name:  query.last_name,
    tag_string: query.tag_string,
    return_to:  query.return_to,
    identifier: query.identifier,
    addresses: [
      {
        address1  : query.address1,
        address2  : query.address2,
        city      : query.city,
        zip       : query.zip,
        country   : query.country,
        first_name: query.first_name,
        last_name : query.last_name,
        phone     : query.phone,
        province  : query.province, 
        province_code: query.province_code,
        country_code : query.country_code,            
        default : query.default
      }
    ]
  };
}