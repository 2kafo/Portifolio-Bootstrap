import React from 'react'
import './portifolio.css'
import { Carousel, CarouselCaption, CarouselItem, Container } from 'react-bootstrap'
import { chakulaApp } from './import'

const Portifolio = () => {
    return (
        <>
            <Container className="portifolio section-padding" id="portifolio">
                <h1>Portifolio</h1>

                <Carousel >
                    <CarouselItem>
                        <CarouselCaption style={{color:'#000'}}>
                            <h3>Chaniakjljlj</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                        </CarouselCaption>
                        <img className='image' src={chakulaApp} alt='chakulaApp'/>
                    </CarouselItem>

                    <CarouselItem>
                        <img className='image' src={chakulaApp} alt='chakulaApp' />
                        <CarouselCaption style={{color:'#000'}}>
                            <h3>Chania</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>

            </Container>

        </>
    )
}

export default Portifolio