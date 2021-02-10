import React from 'react'
import './Gif.css';

const Gif = ({title, url, id}) => {
  return (
    <a href={`#${id}`} className="Gif">
      <p>{title}</p>
      <img src={url} />
    </a>
  )
}

export default Gif