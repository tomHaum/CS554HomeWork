// Import everything from express and assign it to the express variable
import express from "express";

// Import HomeController from controllers entry point
import { HomeController } from "./controller";

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = +(process.env.PORT || "3000");

// Mount the HomeController at the /home route
app.use("/home", HomeController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});
