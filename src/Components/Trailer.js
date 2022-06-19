import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieData } from "../Constants/Data";

function Trailer() {
    const navigate=useNavigate()
    const params=useParams()
    console.log(params.id)
    const movie = MovieData.find(el=>el.id==params.id)
    return (
    <div>
        <h2>{movie.title}</h2>
        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
       
        <button variant="primary"onClick={()=>navigate(-1)}>previous</button>{' '}
    <button variant="primary"onClick={()=>navigate(1)}>forward</button>{' '}
    </div>
    )
}

export default Trailer;