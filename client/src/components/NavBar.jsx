import { Link } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link className="link_class" to={"/"}>
          Home
        </Link>
        <Link className="link_class" to={"/about"}>
          About
        </Link>
        <Link className="link_class" to={"/games"}>
          Games
        </Link>
        <Link className="link_class" to={"/reviewsubmit"}>
          Submit
        </Link>
        <Link className="link_class" to={"/contact"}>
          Contact
        </Link>
        <Link className="link_class" to={"/links"}>
          Links
        </Link>
      </nav>
    </>
  );
}
