import React from "react";

const Alergeny = () => {
  return (
    <form>
      <fieldset>
        <label for="alergen1">Alergen</label>
        <input id="alergen1" name="alergen" type="text" />
        <input type="button" value="usuń" />
      </fieldset>
      <button type="submit">Dodaj alergen</button>
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default Alergeny;
