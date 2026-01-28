import { useNavigate } from "react-router-dom";

/**
 * @function PageNotFound
 * 
 * @import react-router-dom
 * 
 * @constant useNavigate per navigare attraverso le pagine della SPA
 * 
 * @returns bottone per navigazione a HomePage
 */

export default function PageNotFound(){

    const nav = useNavigate();

    return (
    <>
        <h1>404 Not Found</h1>
        <button onClick={() =>{nav('/home')}}>Back to Home</button>
    </>
    );
}