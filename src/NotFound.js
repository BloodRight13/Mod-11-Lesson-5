import React from 'react';  
import { Container, Row, Col, Image, Button } from 'react-bootstrap';  
import { NavLink } from 'react-router-dom';  
import notFoundImage from './not-found-image.jpg'; // Replace with your own image  
  
const NotFound = () => {  
  return (  
   <Container className="text-center mt-5">  
    <Row>  
      <Col md={6} className="offset-md-3">  
       <h1 className="text-danger">404 - Not Found</h1>  
       <p className="text-secondary">Sorry, the page you're looking for doesn't exist.</p>  
       <Image src={notFoundImage} alt="Not Found Image" fluid />  
       <NavLink to="/">  
        <Button variant="primary" className="mt-3">Back to Homepage</Button>  
       </NavLink>  
      </Col>  
    </Row>  
   </Container>  
  );  
};  
  
export default NotFound;
