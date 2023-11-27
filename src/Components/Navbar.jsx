import { Link } from "react-router-dom"

import logo from "../Components/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import menu from "../Components/menu.png";



function NAvbar() {
    return (
        <>
            {/* <Navbar> */}
            <div className="bg-black">
                <Container >
                    <Nav className="py-4 d-flex justify-content-around align-items-center ">
                        <div style={{ paddingRight: '50px ', width: '200px', paddingTop: '5px', }}>
                            <Link to="/"> <img alt="Your logo." src={logo} /></Link>
                        </div>
                        <div className="links d-flex  ">
                            <Nav.Link className="text-white d-none d-lg-block" >Home</Nav.Link>
                            <Nav.Link className="text-white d-none d-lg-block">Pages</Nav.Link>
                            <Nav.Link className="text-white d-none d-lg-block" >Movies</Nav.Link>
                            <Nav.Link className="text-white d-none d-lg-block" >Tv Shows</Nav.Link>
                            <Nav.Link className="text-white d-none d-lg-block">Celebs</Nav.Link>
                            <Nav.Link className="text-white d-none d-lg-block">Blog</Nav.Link>
                        </div>
                        <div className="burger-menu  d-block d-lg-none">
                            <img alt="Your menu." src={menu} />
                        </div>

                    </Nav>
                </Container>
            </div>
            {/* </Navbar> */}

        </>
    );
}
export default NAvbar;
