import React from 'react'
import { Container} from 'react-bootstrap'
import './navigation.css'

const Navigation = () => {
    return (
        <>
            <Container fluid className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portifolio">Portifolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Container>

        </>
    )
}

export default Navigation