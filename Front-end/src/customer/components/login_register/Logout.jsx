import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

export const Logout = () => {
    const {LogoutUser, setUser} = useAuth();
    setUser("");
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);




    return <Navigate to="/login" />
};

