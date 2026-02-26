import { useContext, type ReactNode } from "react"
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

type privateRouteProp = {
    children: ReactNode;
}


const PrivateRoute = ({children}: privateRouteProp) => {

    const {user, isLoading} = useContext(AuthContext)!;

    if(isLoading) return <div>Loading...</div>;
    return user ? children : <Navigate to="/login"/>;
}

export default PrivateRoute
