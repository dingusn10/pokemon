import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import PokemonApp from './PokemonApp';

export default function PokeData() {
    const [pokeType, setPokeType] = useState([]);
    const [pokeSprite, setPokeSprite] = useState([]);

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios.get(moreInfo, {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setLoading(false);
                setPokeType(res.data.results.map((t) => [t.types.type.name]));
                setPokeSprite(res.data.results.map((s) => [s.sprites.front_default.url]));
            });
    });

    if (loading) return "Loading...";

  return (
      console.log(pokeType),
      console.log(pokeSprite),
      console.log(moreInfo)
  )
}
