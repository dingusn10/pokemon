import { useEffect, useState } from "react"
import axios, { Canceler } from "axios"
import Loader from "../Loader"



export default function PokemonList() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel: Canceler
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })
   return () => cancel()
     }, [currentPageUrl])

     function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
     }

     function gotPrevPage() {
        setCurrentPageUrl(prevPageUrl)
     }

     if (loading) return <Loader />

    return (
        <>
        <div></div>
        
        </>
    )
}