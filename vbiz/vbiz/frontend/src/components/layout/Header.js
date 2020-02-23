import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const { isAuthenticated, user} = this.props.auth;
        
        const authLinks = (
            
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className = "navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}`: ""}</strong>
                </span>
                            <li className = "nav-item">
                                <button onClick={this.props.logout} className = "nav-link btn btn-info btn-sm text-light">Logout</button>
                            </li>
                            
                        </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className = "nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
        );

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
                    { isAuthenticated ? authLinks: guestLinks}
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
});
export default connect(mapStateToProps, {logout})(Header)
