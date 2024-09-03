import React, { useEffect ,useState } from 'react';
import {API_KEY ,imgUrl ,url } from '../../constants/constants'
import './RowPost.css';
import YouTube from 'react-youtube'
import axios  from '../../axios';

function RowPost(props) {
  const [ movies , setMovies ] =  useState([])
  const [ id , setUrlId ] =  useState('')
  useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log(res.data)
      setMovies(res.data.results)
    }).catch((error => console.log(error)))
  },[])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log('id',id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res);
      if(res.data.results.length !== 0 ){
        setUrlId(res.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => 
             <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`}/>
          )}
        </div>
        {id && <YouTube opts={opts} videoId={id.key}></YouTube>}
            </div>
  )
}

export default RowPost
