import React from 'react'
import Pagenation from './Pagenation.jsx'


export default function PokemonList({pokemon}) {
  return (
    <div className='flex flex-row flex-wrap gap-4 mx-auto justify-evenly p-14 w-3/4 h-fit'>
      {pokemon.map((p) => (
        <div className="flex h-72 w-48 border-2 p-4 capitalize justify-center text-center" key={p}>
          {p}
        </div>
      ))}
    </div>
  );
}
