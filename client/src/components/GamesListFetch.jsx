import { useEffect } from "react";

export default function GamesListFetch() {
  const [gameItem, setGameItem] = useState(null);
  useEffect(() => {
    async function fetchGames() {
      const gamesResponse = await fetch(
        "https://week-07-assignment-ggd2.onrender.com/games"
      );
      const loadGameData = await gamesResponse.json();
      console.log(loadGameData);
    }
    fetchGames();
  }, []);
}
