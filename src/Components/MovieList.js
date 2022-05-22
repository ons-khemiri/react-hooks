import React from 'react';
import { MovieData } from '../Constants/Data';
import{ useState } from 'react';
import MovieCard from './MovieCard'
import Add from './Add';
function MovieList({search}) {
    const [movies, setMovies]= useState(MovieData)
   
    const addMovie=(newMovie)=>{
     setMovies([...movies,newMovie])
     }
    
    return(
    <>
    <Add addMv={addMovie}/>
    <br/>
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
    {movies.filter(movie=>movie.title.toLowerCase().includes(search.toLowerCase())||movie.rate>=search).map(el=><MovieCard films={el}/>)}
    
    </div>
    </>
    )
    }
    
    export default MovieList