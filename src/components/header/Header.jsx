import React from 'react'
import './header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Container fluid className="header section-padding">
                <h1 style={{ textTransform: 'uppercase', textShadow: '.5rem .5rem .5rem rgb(11, 11, 11)' }}>AK</h1>
                <div className="Contact">
                    <h6>akafonogo21@gmail.com</h6>
                    <h6>+255758557536</h6>
                    <h6>+255679557536</h6>
                    
                    <i className="fa-brands fa-facebook" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-linkedin" />
                    <i className="fa-brands fa-google" />
                </div>
            </Container>

        </>
    )
}


export default Header