//TODO : Set up a server API
//================================
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// Initialize express
const app = express();

//Use JSON in our server!
app.use(express.json());

//Config cors
app.use(cors());

//port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API running on port ${PORT}`);
});

//TODO: Set up a routing system with atleast one GET route and one POST route

// Get root ROUTE (relates to READ in the CRUD acronym)
app.get("/", (req, res) => {
  res.json({ message: "Neon Game Reviews server API. GET adjusted." });
});

//Get list of reviewed games
app.get("/games", async (req, res) => {
  try {
    //Query the game list
    const queryGames = await db.query(
      `SELECT game_name, genre, box_art FROM game_title`
    );
    res.json(queryGames.rows);
  } catch (error) {
    console.error(
      error,
      "Couldn't GET response for the /games route. Something went wrong here."
    );
    res.status(500).json({ response: "Failed" });
  }
});

//Remember to store your secrets in the .env file!
