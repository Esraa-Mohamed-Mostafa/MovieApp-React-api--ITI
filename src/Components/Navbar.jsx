// ;



// function Navbar() {
//     return (
//         <div>
//             <h2>logo</h2>
//             <ul>
//                 <li> < Link to="/details">details</Link></li>
//                 <li>< Link to="/movie">home</Link></li>


//             </ul>
//         </div>)
// }
// export default Navbar;



import { Link } from "react-router-dom"

import logo from "../Components/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NAvbar() {
    return (
            <Navbar bg="primary" data-bs-theme="dark"  style={{ display: 'flex', justifyContent: 'space- between' }}>
                <Container>
                    <Nav className="me-auto">
                        <img
                            style={{
                                height: 15,
                            }}
                            alt="Your logo."
                            src={logo} />
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
}
export default NAvbar;
