import { useParams } from "react-router";

export default function GameTitleDyn() {
  let { gameTitleDyn } = useParams();
  return (
    <>
      <h2>{gameTitleDyn}</h2>
    </>
  );
}
