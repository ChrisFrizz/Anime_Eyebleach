import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @interface ILoginNavigateState
 * @param username provides the name we use to call the user.
 */

export interface ILoginNavigateState{
    username: string;
}

/**
 * @function Login manages the user's login to the site.
 * 
 * @import react-router-dom
 * 
 * @constant navigate it's the place where the user is redirected.
 * 
 * @function handleSubmit redirects to the collection after sending the form
 * 
 * @returns login form with username and submit button.
 */

export default function Login(){
    
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("Form inviata");
        navigate(`/mycollection`, {state:{username: username} as ILoginNavigateState});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="Inserisci nome utente o email"
                value={username}
                onChange={(event)=>{
                    setUsername(event.target.value)}
                }
            />
            <button type="submit">Login</button>
        </form>
    );
}