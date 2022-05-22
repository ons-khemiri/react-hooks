import React from 'react';
import { Card } from 'react-bootstrap';


function MovieCard({films}){
    return(
    <div>
    <Card style={{ width: '18rem' ,marginTop:"20px"}}>
  <Card.Img variant="top" src={films.posterURL}/>
  <Card.Body>
    <Card.Title>{films.title}</Card.Title>
    <Card.Text>
      {films.description}
      </Card.Text>
      <Card.Text>
      Rate : {films.rate}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    )
    }
    
    export default MovieCard