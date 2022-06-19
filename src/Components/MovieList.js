import React from 'react';
import { MovieData } from '../Constants/Data';
import{ useState } from 'react';
import MovieCard from './MovieCard'
import Add from './Add';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function MovieList({search}) {
    const navigate=useNavigate()
    const [movies, setMovies]= useState(MovieData)
   
    const addMovie=(newMovie)=>{
     setMovies([...movies,newMovie])
     }
    
    return(
    <>
    <Add addMv={addMovie}/>
    <br/>
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
    {movies
    .filter(
        (movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())||
        movie.rate >= search
    )
        .map((el)=>( 
        <MovieCard films={el}/>
        ))}
    </div>
    <br/>
    <Button variant="primary"onClick={()=>navigate(-1)}>previous</Button>{' '}
    <Button variant="primary"onClick={()=>navigate(1)}>forward</Button>{' '}
    <br/>
    </>
    )
    }
    
    export default MovieList