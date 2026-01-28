import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @interface ILoginNavigateState
 * @param username da' il nome con cui chiamiamo l'user
 */

export interface ILoginNavigateState{
    username: string;
}

/**
 * @function Login gestisce il login dell'utente al sito
 * 
 * @import react-router-dom
 * 
 * @constant navigate è il posto dove si reindirizza l'user
 * 
 * @function handleSubmit reindirizza alla collezione dopo aver completato il login
 * 
 * @returns form di login con username e bottone per mandare form
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