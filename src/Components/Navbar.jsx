import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function imagecard() {
    return (
       <div>
        <Navbar  expand="lg" style={{height:'100px',backgroundColor:'grey'}}>
      <Container >
        <Navbar.Brand href="#home" style={{color:'white',marginLeft:'10px'}}><img
                    className="d-block w-100"
                    src="https://haberl.sk/wp-content/uploads/2020/07/Haberl_investment.png"
                    alt="Image One"
                /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{textAlign:'right'}}>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',paddingLeft:'100px'}}>HOME</Nav.Link>
            <NavDropdown title="ABOUT US" id="collasible-nav-dropdown" style={{fontSize:'18px',paddingLeft:'30px'}}>
              <NavDropdown.Item href="#action/3.1" style={{backgroundColor:'grey'}} >Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{backgroundColor:'grey'}}>Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{backgroundColor:'grey'}}>News</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',paddingLeft:'30px'}}>SERVICES</Nav.Link>
            <Nav.Link href="#link" style={{color:'black',fontSize:'18px',paddingLeft:'30px'}}>PROJECTS</Nav.Link>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',paddingLeft:'30px'}}>OUR BLOG</Nav.Link>
            <Nav.Link href="#link" style={{color:'black',fontSize:'18px',paddingLeft:'30px'}}>CONTACT</Nav.Link>

            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
}