import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../Hooks/UseAdmin';
import Loading from '../SharedPages/Loading';

import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;

    }
    return children;
};

export default RequireAdmin;