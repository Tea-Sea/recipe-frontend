import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);

    const apiUrl = import.meta.env.VITE_GO_API_URL


    useEffect(() => {
        const checkSession = async() => {
            try {
                const res = await fetch(`${apiUrl}/auth/me`, {
                    credentials: "include",
                });
                if (res.ok) {
                    setAuthenticated(true);
                } else if (res.status === 401 ) {
                    setAuthenticated(false)
                }
                else {
                    setAuthenticated(false)
                }
            } catch (err) {
                console.error(err);
                setAuthenticated(false);
            }
        };
        checkSession();
    }, []);

    if (authenticated === null) {
        return <div>LOADING...</div>;
    }

    if (authenticated === false) {
        return <Navigate to= "/login" replace />;
    }

    return <Outlet />;
}
export default ProtectedRoute