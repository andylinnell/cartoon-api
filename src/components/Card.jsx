
export default function Card({cartoon}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{cartoon.title}</Card.Title>
          <img src={cartoon.image} alt={cartoon.title} />
          <Card.text>{cartoon.genre}  {cartoon.year}</Card.text>
          <Card.text>{cartoon.rating}</Card.text>

        </Card.Body>
      </Card>
    );
  }
  
