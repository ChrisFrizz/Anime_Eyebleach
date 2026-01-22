import { useNavigate } from "react-router-dom";

export default function PageNotFound(){

    const nav = useNavigate();

    return (
    <>
        <h1>404 Not Found</h1>
        <button onClick={() =>{nav('/home')}}>Back to Home</button>
    </>
    );
}