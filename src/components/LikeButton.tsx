import { useEffect, useState } from "react"

export default function LikeButton(){

    const [liked, setLiked] = useState(localStorage.getItem('liked') === 'true' || false);

    useEffect(()=>{
        localStorage.setItem('liked', liked.toString());
    }, [liked]);

    function handleLike(){
        setLiked(!liked);
    }

    return (
        <div>
            <button onClick={handleLike}></button>
        </div>
    )
}