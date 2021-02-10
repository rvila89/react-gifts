import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGifs } from '../services/getGifs'
import Gif from './Gif'

const ListOfGifs = () => {
  const [gifs, setGifs ] = useState([])
  const { keyword } = useParams()
  const [loading, setLoading] = useState(false)
  // console.log(props.match.params.keyword)
  
  useEffect(() => {
    setLoading(true)
    getGifs({keyword}).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])
  
  return (
    loading ? 
      <p>Cargando...</p> : 
      (
        gifs.map(gif => (
          <Gif title={gif.title} url={gif.url} key={gif.id} id={gif.id}/>
        ))
      )
  )
}

export default ListOfGifs