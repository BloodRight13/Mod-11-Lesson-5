import React from 'react';  
import { Button, Card, Container, Image, Row, Col } from 'react-bootstrap';  
  
// Define the HomePage component  
function HomePage() {  
  return (  
   // Use Container for responsive layout  
   <Container className="p-5" style={{ backgroundColor: '#f0f0f0', borderColor: '#ddd', border: '1px solid', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>  
    {/* Add a responsive image */}  
    <Image src="src/assets/welcome-image.jpg" alt="Welcome Image" fluid className="mb-4" style={{ borderRadius: '10px' }} />  
  
    {/* Display a welcome message with a primary button */}  
    <h1 className="mb-4" style={{ color: '#333' }}>Welcome to Our Application!</h1>  
    <Button variant="primary" size="lg" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Shop Now</Button>  
  
    {/* Introduce a Card component to display additional content */}  
    <Row className="mt-5">  
      <Col md={4}>  
       <Card style={{ borderColor: '#ddd', border: '1px solid', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>  
        <Card.Img variant="top" src="src/assets/featured-product1.jpg" />  
        <Card.Body>  
          <Card.Title>Featured Product 1</Card.Title>  
          <Card.Text>  
           This is a short description of the featured product.  
          </Card.Text>  
          <Button variant="primary">Learn More</Button>  
        </Card.Body>  
       </Card>  
      </Col>  
      <Col md={4}>  
       <Card style={{ borderColor: '#ddd', border: '1px solid', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>  
        <Card.Img variant="top" src="src/assets/featured-product2.jpg" />  
        <Card.Body>  
          <Card.Title>Featured Product 2</Card.Title>  
          <Card.Text>  
           This is a short description of the featured product.  
          </Card.Text>  
          <Button variant="primary">Learn More</Button>  
        </Card.Body>  
       </Card>  
      </Col>  
      <Col md={4}>  
       <Card style={{ borderColor: '#ddd', border: '1px solid', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>  
        <Card.Img variant="top" src="src/assets/featured-product3.jpg" />  
        <Card.Body>  
          <Card.Title>Featured Product 3</Card.Title>  
          <Card.Text>  
           This is a short description of the featured product.  
          </Card.Text>  
          <Button variant="primary">Learn More</Button>  
        </Card.Body>  
       </Card>  
      </Col>  
    </Row>  
   </Container>  
  );  
}  
  
export default HomePage;