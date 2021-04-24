import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Virtual Shop</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink className="" to="/" exact>
                                    Home
                                </NavLink>
                            </li>
                            {user.permissions.map(permission => (
                                <li key={permission.id}><a href="#">{ permission.option }</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
