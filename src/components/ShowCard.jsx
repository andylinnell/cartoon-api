import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default function ShowCard({cartoon}) {
    const [show, setShow] = useState()


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <div onClick={handleShow} className="card">

            <Container fluid>
                <Row>
                    <Col>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>{cartoon.title}</Modal.Title>
                            </Modal.Header>
    
                            <Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-LFOdlGdnp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                            </Modal.Body>
    
                            <Modal.Footer>
                                <Button variant='secondary' 
                                        onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal> 
                    </Col>           
                </Row>
            </Container>

            <h3>{cartoon.title}</h3>
            <img src={cartoon.image} alt={cartoon.title} />
            <p>{cartoon.genre}  {cartoon.year}</p>
            <p>{cartoon.rating}</p>
            <details>
                <summary>Info</summary>
                <p>Runtime: {cartoon.runtime_in_minutes}</p>
                <p>Episodes: {cartoon.episodes}</p>
                <p>Creator: {cartoon.creator}</p>
            </details>

        </div>
    )
}