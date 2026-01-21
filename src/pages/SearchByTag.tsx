import AutocompleteSearchBar from "../components/AutocompleteSearchBar";
import { useLocation, useNavigate, type Location } from "react-router-dom";
import type { ILoginNavigateState } from "./Login";
import { useEffect } from "react";


export default function SearchByTag(){
    
    const location: Location<ILoginNavigateState> = useLocation();
    const navigate = useNavigate();
    
    const username = location.state?.username ?? "Guest";

    useEffect(()=>{
        if (!location.state) navigate("/login");
    }, [location, navigate]);
    
    return (
            <div>
                <h1>Welcome: {username}</h1>
                <AutocompleteSearchBar />
            </div>
        )
}