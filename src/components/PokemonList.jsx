import React from 'react'
import Pagenation from './Pagenation.jsx'


export default function PokemonList({pokemon, pokeType, pokeSprite}) {
  return (
    <div className='flex flex-row flex-wrap gap-4 mx-auto justify-evenly p-14 w-3/4 h-fit'>
      {pokemon.map((p, t, s) => (
        <div className="flex h-72 w-52 border-2 p-4 capitalize justify-center text-center" key={p}>
          <div>{p}</div>
          <div>{t}</div>
          <img src={s} />

        </div>
      ))}
    </div>
  );
}
