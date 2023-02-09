import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import ShowCard from "./ShowCard";


export default function ModalPreview () {
    const [show, setShow] = useState()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Fine! Title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m4eTVN1iluQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant='secondary' 
                                    onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal> 
                </Col>           
            </Row>
        </Container>

    )
}