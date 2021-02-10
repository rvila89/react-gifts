import React, { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
import Gif from './Gif'

const ListOfGifs = ({keyword}) => {
  const [gifs, setGifs ] = useState([])
  
  useEffect(() => {
    console.log('efecto ejecutado')
    getGifs({keyword}).then(gifs => setGifs(gifs))
  }, [keyword])
  
  return (
    gifs.map(gif => (
      <Gif title={gif.title} url={gif.url} key={gif.id}/>
    ))
  )
}

export default ListOfGifs