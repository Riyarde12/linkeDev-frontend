import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";


export const PrivateRoute = ({ redirectPath = '/login/', children }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isLoading = useSelector(state => state.auth.isLoading);

    if (!isAuthenticated && !isLoading) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

    // <Route {...rest}
    //     render={props => !isAuthenticated && isLoading ?
    //         (<Navigate to="/login" />) :
    //         (<Component {...props} />)}></Route>;

    // return <div>PrivateRoute</div>;
// };
