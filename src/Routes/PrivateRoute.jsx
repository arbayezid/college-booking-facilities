import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation()

    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
}
export default PrivateRoute;