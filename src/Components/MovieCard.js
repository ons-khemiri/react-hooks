import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function MovieCard({films}){
  const navigate=useNavigate()
  return(
    <div>
    <Card style={{ width: '18rem' ,marginTop:"20px"}}onClick={()=>navigate(`/movie/${films.id}`)}>
  <Card.Img variant="top" src={films.posterURL}/>
  <Card.Body>
    <Card.Title>{films.title}</Card.Title>
    <Card.Text>
      {films.description}
      </Card.Text>
      <Card.Text>
      Rate : {films.rate}
    </Card.Text>
  <Button>trailer</Button>
  </Card.Body>
</Card>
    </div>
    )
    }
    
    export default MovieCard