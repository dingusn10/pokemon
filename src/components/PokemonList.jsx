import React from 'react'
import Pagenation from './Pagenation.jsx'


export default function PokemonList({pokemon}) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
      </div>
  )
}
