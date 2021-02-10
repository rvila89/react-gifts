import React from 'react'

const Gif = ({title, url}) => {
  return (
    <>
      <p>{title}</p>
      <img src={url} />
    </>
  )
}

export default Gif