import React from 'react'
import Logo from "../assets/image/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand me-auto" to="/">
                            {/*  LOGO */}
                            <img src={Logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="between-space"></div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/learn">Learn</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                            <ul className="navbar-nav bordered-link ">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item register-link">
                                    <Link className="nav-link bg-fill-white" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header