import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h1 className="text-white">Vbiz</h1>
                        
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className = "nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default Header
