import React,{Component} from 'react';
import  './MainNavBar.css'
import {Navbar, Button, FormControl, Nav, Form} from 'react-bootstrap' 



class MainNavBar extends Component {

    render(){
        return(
            <div >
            <Navbar bg="light" expand="lg" className="shadow p-2 mb-5 bg-white rounded" >
             <div className='container'>
            <Navbar.Brand href="#home">Feclesiadee</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Form inline className='mx-auto'>
            <FormControl type="text" placeholder="Search" 
            className="rounded-pill form-control "  />
            
           
          </Form>
              
               <Nav className="py-1">
                <Nav.Link href="#link" className='px-3 text'>Historias</Nav.Link>
                <Nav.Link href="#link" className='px-3 text'>Sign In</Nav.Link>
                <Nav.Link href="#link"className='px-3 text'>Sign Up</Nav.Link>
                <Button variant="danger" className="rounded-pill">Add Your Church</Button>
                
              </Nav>
              
              
            </Navbar.Collapse>
            </div>
            
          </Navbar>
            </div>
        )
    }
}


export default MainNavBar