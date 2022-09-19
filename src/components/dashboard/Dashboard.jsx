import React, { useEffect } from "react";
import { getUserProfile } from "../../store/features/profileSlice";
import { useDispatch, useSelector } from 'react-redux';


export const Dashboard = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserProfile());
    }, []);

    return <div>Dashboard</div>;
};
