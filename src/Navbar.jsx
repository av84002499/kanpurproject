import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</Link>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <Link to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</Link>
                        <Link to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</Link>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar