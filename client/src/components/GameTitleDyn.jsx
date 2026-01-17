import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function GameTitleDyn() {
  let { gametitle } = useParams();

  // const [gameSelectd3, setGameSelectd3] = useState([]);
  // const [gameSelectdib2, setGameSelectdib2] = useState([]);
  const [currentGamePage, setCurrentGamePage] = useState([]);
  const [gameName, setGameName] = useState(null);
  const [genreGet, setGenreGet] = useState(null);
  const [releaseDateGet, setReleaseDateGet] = useState(null);
  const [synopsisGet, setSynopsisGet] = useState(null);
  const [boxArtGet, setBoxArtGet] = useState(null);

  // Prepare for some really hideous code so we can check which dynamic route game we're on
  if (gametitle == currentGamePage[0].alias) {
    setGameName(currentGamePage[0].game_name);
    setGenreGet(currentGamePage[0].genre);
    setReleaseDateGet(currentGamePage[0].release_date);
    setSynopsisGet(currentGamePage[0].synopsisGet);
    setBoxArtGet(currentGamePage[0].box_art);
  } else if (gametitle == currentGamePage[1].alias) {
    setGameName(currentGamePage[1].game_name);
    setGenreGet(currentGamePage[1].genre);
    setReleaseDateGet(currentGamePage[1].release_date);
    setSynopsisGet(currentGamePage[1].synopsisGet);
    setBoxArtGet(currentGamePage[1].box_art);
  }

  useEffect(() => {
    async function fetchGamesList() {
      const gamesListResponse = await fetch(
        "https://week-07-assignment-ggd2.onrender.com/games"
      );
      const loadGameListData = await gamesListResponse.json();
      console.log(loadGameListData);
      setCurrentGamePage(loadGameListData);
    }
    fetchGamesList();
  }, []);

  // useEffect(() => {
  //   async function fetchGamesDetailDoom3() {
  //     const gameResponse = await fetch(
  //       "https://week-07-assignment-ggd2.onrender.com/gamesdetaildoom3"
  //     );
  //     const loadDetailGameD3Data = await gameResponse.json();
  //     console.log(loadDetailGameD3Data);
  //     setGameSelectd3(loadDetailGameD3Data);
  //   }
  //   fetchGamesDetailDoom3();
  // }, []);

  // useEffect(() => {
  //   async function fetchGamesDetailDiablo2() {
  //     const gameResponse = await fetch(
  //       "https://week-07-assignment-ggd2.onrender.com/gamesdetaildiablo2"
  //     );
  //     const loadDetailGameData = await gameResponse.json();
  //     console.log(loadDetailGameData);
  //     setGameSelectdib2(loadDetailGameData);
  //   }
  //   fetchGamesDetailDiablo2();
  // }, []);

  return (
    <>
      <div>
        <p>{boxArtGet}</p>
        <h2>{gameName}</h2>
        <h3>{genreGet}</h3>
        <h3>Release Date: {releaseDateGet}</h3>
        <p>{synopsisGet}</p>
      </div>
    </>
  );
}
