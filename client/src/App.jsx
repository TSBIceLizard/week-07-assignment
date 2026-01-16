// import { useState } from 'react'
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import GamesPage from "./components/GamesPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import LinksPage from "./components/LinksPage.jsx";
import GameTitleDyn from "./components/GameTitleDyn.jsx";

//TODO: Set up a routing system and import the relevant components
//note: Advised to have a component for my root route

export default function App() {
  return (
    <>
      <h1>Neon Game Reviews</h1>
      <NavBar />
      <Routes>
        <Route element={<HomePage />} path={"/"} />
        {/* <Route element={<HomePage />} path={"/home"} /> */}
        <Route element={<AboutPage />} path={"/about"} />
        <Route element={<GamesPage />} path={"/games"}>
          <Route element={<GameTitleDyn />} path={":gametitle"} />
        </Route>
        <Route element={<ContactPage />} path={"/contact"} />
        <Route element={<LinksPage />} path={"/links"} />
      </Routes>
    </>
  );
}

//In the components folder i have the minimum amount of components to make the app work, but it's really recommended to make the most of my component system (PROPS LIKE MANNY ADVISED!!!)

//Not a requirement, but I think the users would like some conditional rendering to make the UI less cluttered?!?
