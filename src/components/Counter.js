import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, FormControl, FormText } from 'react-bootstrap'

const Counter = () => {
  const [count, setCounter] = useState({
    count: 0
  })

 
  const handleincrement = () => {
    setCounter({
      count: count.count + 1
    })
  }
  const decrement = () => {
    setCounter({
      count: count.count - 1
    })
  }
  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col >
            <Card className='shadow-lg'>
              <Card.Body>
                <p className='display-2'>Counter: {count.count}</p>
                <Button variant='success' className='m-1' onClick={handleincrement}>Increment</Button>
                <Button variant='warning' className='m-1' onClick={decrement}>Increment</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Form */}
        <Row>
          <Col>
          <Card className='shadow-lg'>
            <Card.Header className='p-3' style={{backgroundColor:'orange'}}>
              Register 
            </Card.Header>
            <Card.Body>
              
                  
                  <input placeholder='Enter some text'/>
               
              
            </Card.Body>

          </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Counter