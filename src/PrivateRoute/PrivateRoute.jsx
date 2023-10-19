import React, { useContext } from 'react'
import { UserContext } from '../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to="/login" replace></Navigate>
    }
    
    return children;
}

export default PrivateRoute