import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import MovieList from './MovieList';
const Search =()=>{
const [search,setSearch]= useState("")

return(
<div>
<Form.Control type="text" placeholder="Enter the name or the rate of the movie"onChange={(e)=>setSearch(e.target.value)} />
<br/>
<MovieList search={search}/>

</div>
)
}

export default Search