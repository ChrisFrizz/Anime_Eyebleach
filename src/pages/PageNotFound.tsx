import { useNavigate } from "react-router-dom";

/**
 * @function PageNotFound
 * 
 * @import react-router-dom
 * 
 * @constant useNavigate to navigate through the SPA pages
 * 
 * @returns Home navigation button
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