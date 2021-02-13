import React from "react";
import { useRoutes, A } from "hookrouter";
import Routers from "./routers";
import Components from "./components";

const { Naglowek, Nawigacja, Stopka } = Components;
import "./style.css";

export default function App() {
  const routeResult = useRoutes(Routers);
  return (
    <>
      <Naglowek />
      <Nawigacja />
      {routeResult}
      <Stopka />
    </>
  );
}
