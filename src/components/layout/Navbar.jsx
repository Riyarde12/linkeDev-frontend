import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/features/authSlice";

export const Navbar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isLoading = useSelector(state => state.auth.loading);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());

    };

    const authLinks = (
        <ul>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            {/* ONE FOR PROFILES */}
            <li>
                <Link to='#!'>Developers</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'>
                    <i className="fas fa-code" />LinkeDev
                </Link>

            </h1>
            {!isLoading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    );
};
