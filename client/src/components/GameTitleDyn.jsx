import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./GameTitleDyn.css";

export default function GameTitleDyn() {
  let { gametitle } = useParams();

  const [currentGamePage, setCurrentGamePage] = useState([]);

  useEffect(() => {
    async function fetchGameIndivid() {
      const gamesIndividResponse = await fetch(
        `https://week-07-assignment-ggd2.onrender.com/gamesdetail${gametitle}`
      );
      const loadGameIndividData = await gamesIndividResponse.json();
      console.log(loadGameIndividData);
      setCurrentGamePage(loadGameIndividData);
    }
    fetchGameIndivid();
  }, [gametitle]);

  // This page only renders occasionally?! WHY! My first suspicion was that the API on render was losing connection but that's not the case!

  return (
    <>
      <div className="gamespage_individual_div">
        <div className="focus_piece">
          <img
            src={currentGamePage[0].box_art}
            alt={currentGamePage[0].game_name}
          />
          <h2>{currentGamePage[0].game_name}</h2>
          <h3>{currentGamePage[0].genre}</h3>
          <h3>Release Date: {currentGamePage[0].release_date}</h3>
        </div>
        <p>{currentGamePage[0].synopsis}</p>
      </div>
    </>
  );
}
