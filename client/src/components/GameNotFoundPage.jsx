import { useParams } from "react-router";

export default function GameNotFoundPage() {
  let { gameNotFound } = useParams();
  return (
    <>
      <h2>{gameNotFound} not found :( Is your spelling correct?</h2>
    </>
  );
}
