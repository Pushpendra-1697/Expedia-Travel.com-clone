import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PrivateRouter({ children }) {
    const { isAuth, token } = useContext(AuthContext);
    if (!isAuth && token === null) {
        return <Navigate to='/login' />
    }
    return children;
}

export default PrivateRouter;
