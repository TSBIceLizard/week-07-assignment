import { useEffect, useState } from "react";
import GamePageItem from "./GamesPageItem";
import "./GamesPage.css";
// import { Outlet, useSearchParams, Link } from "react-router";
import { Link } from "react-router";

export default function GamesPage() {
  const [gameItems, setGameItems] = useState([]);
  useEffect(() => {
    async function fetchGames() {
      const gamesResponse = await fetch(
        "https://week-07-assignment-ggd2.onrender.com/games"
      );
      const loadGameData = await gamesResponse.json();
      console.log(loadGameData);
      setGameItems(loadGameData);
    }
    fetchGames();
  }, []);

  return (
    <>
      <div className="gamespage_div">
        <h2>Games</h2>
        <div className="line_one">
          {gameItems.map((gameItem) => (
            <Link to={`/${gameItem.alias}`}>
              <GamePageItem
                imgsrc={gameItem.box_art}
                gameName={gameItem.game_name}
                genre={gameItem.genre}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
