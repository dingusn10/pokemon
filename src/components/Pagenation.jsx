import React from 'react'
import {gotoNextPage, gotoPreviousPage} from './PokemonApp.jsx'

export default function Pagenation(gotoNextPage, gotoPreviousPage) {
  return (
      <div>
        <button onClick={gotoPreviousPage}>Previous</button>
        <button onClick={gotoNextPage}>Next</button>
    </div>
  )
}
