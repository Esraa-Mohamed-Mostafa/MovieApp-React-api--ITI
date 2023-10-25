import { Link } from "react-router-dom"

import logo from "../Components/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function NAvbar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className=" ">
                    <div className="d-flex justify-content-between">
                        <div style={{ paddingRight: '50px ' ,width: '200px',paddingTop:'5px'}}>
                        < Link to="/"> <img alt="Your logo." src={logo} /></Link>
                            </div>
                        <div className="d-flex">
                            <Nav.Link className="" >Home</Nav.Link>
                            <Nav.Link >Pages</Nav.Link>
                            <Nav.Link >Movies</Nav.Link>
                            <Nav.Link >Tv Shows</Nav.Link>
                            <Nav.Link >Celebs</Nav.Link>
                            <Nav.Link >Blog</Nav.Link>
                        </div>
                    </div>
                </Nav>
                </Container>
        </Navbar>
    );
}
export default NAvbar;
