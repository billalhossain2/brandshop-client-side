import React, { useContext } from 'react'
import { UserContext } from '../contexts/AuthContext'

const PrivateRoute = () => {
    const {user, loading} = useContext(UserContext);
}

export default PrivateRoute