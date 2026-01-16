import "./GamesPageItem.css";

export default function GamesPageItem({ imgsrc, gameName, genre }) {
  return (
    <figure>
      <img src={imgsrc} alt={gameName} />
      <p>{gameName}</p>
      <p>{genre}</p>
    </figure>
  );
}
