import React from "react";
import Components from "../components";

const { PreferencjeZywieniowe, Alergeny } = Components;

const MojProfil = () => {
  return (
    <>
      <h1>MojProfil</h1>
      <Alergeny />
      <PreferencjeZywieniowe />
    </>
  );
};

export default MojProfil;
