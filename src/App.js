import React from "react";
import { useRoutes, A } from "hookrouter";
import Routers from "./routers";
import "./style.css";

export default function App() {
  const routeResult = useRoutes(Routers);
  return <>{routeResult}</>;
}
