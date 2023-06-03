import React from "react";

export default function PokemonRender({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}></div>
      ))}
    </div>
  );
}
