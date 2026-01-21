import { useLocation, useNavigate, type Location } from "react-router-dom";
import type { ILoginNavigateState } from "./Login";
import { useEffect, useState } from "react";


export default function MyCollection(){
    
    const location: Location<ILoginNavigateState> = useLocation();
    const navigate = useNavigate();
    
    const username = location.state?.username ?? "Guest";

    useEffect(()=>{
        if (!location.state) navigate("/login");
    }, [location, navigate]);

    return (
        <div>
            <h1>Welcome: {username}</h1>
            <h1>Liked Images</h1>
        </div>
    )
}