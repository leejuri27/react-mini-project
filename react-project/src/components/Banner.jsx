import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';



const Banner = (props) => {


  let movie = props.movie[8]
  let posterImg = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`
  // console.log('받은값', movie)


  return (
    <div className='banner-img' style={{ backgroundImage: `url(${posterImg})` }}>
      <div className='banner-item'>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner