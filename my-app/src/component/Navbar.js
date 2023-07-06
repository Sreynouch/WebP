import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" name="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="">CultureCambodia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="#"><i className='fas fa-search'></i></a></li>
                            <li className="nav-item"><Link to="/"><a className="nav-link px-lg-3 py-3 py-lg-4">Home</a></Link></li>
                            <li className="nav-item"><Link to="/about"><a className="nav-link px-lg-3 py-3 py-lg-4">About</a></Link></li>
                            <li className="nav-item"><Link to="/login"><a className="nav-link px-lg-3 py-3 py-lg-4">Login</a></Link></li>
                            <li className="nav-item"><Link to="/signup"><a className="nav-link px-lg-3 py-3 py-lg-4">Signup</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default Navbar;