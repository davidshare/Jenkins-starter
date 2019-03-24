// import app dependencies
import express from 'express';

// create constants
const app = express();
const port = 3000;

// setup the express middlewared
app.use(express.json());

// setup the home route
app.get('/', (request, response) => {
  return response.status(200).send({
		message:"<h1>Welcome to the Node.js, Express, Babel, ES6 Boilerplate</h1>"
	});
});

// specify the port to listen to
app.listen(port);
console.log('app running on port ', port);
