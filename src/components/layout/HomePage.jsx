import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <section className="home-page">
            <div className="dark-overlay">
                <div className="home-page-inner">
                    <h1 className="x-large">Developer Connector</h1>
                    <p className="lead">
                        Create a developer profile, connect via social media you like, share posts and get help from other developers, Your connactions start below here
                    </p>
                    <div className="buttons">
                        <Link to='/register' className="btn btn-primary">Sign Up</Link>
                        <Link to='/login' className="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
