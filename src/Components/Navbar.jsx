import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h2>logo</h2>
            <ul>
                <li> < Link to="/details">details</Link></li>
                <li>< Link to="/movie">home</Link></li>

            </ul>
        </div>)
}
export default Navbar;

