import './index.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    //const name = 'Saiprasanth A';
    const [name, setName] = useState("SaiPrasanth");
    return (  
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-none">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active ms-4" to="/">Tasks</Link>
                    <Link className="nav-link ms-4" to="/traffic">Traffic</Link>
                    <Link className="nav-link ms-4" to="/text">Input</Link>
                    <Link className="nav-link ms-4" to="/number">Number</Link>
                    <Link className="nav-link ms-4" to="/password">Password</Link>
                    <Link className="nav-link ms-4" to="/star">Star</Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
            
    );
}

export default Navbar;