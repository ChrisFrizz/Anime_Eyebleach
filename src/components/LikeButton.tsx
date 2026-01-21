import { useEffect, useState } from "react"

export default function LikeButton(){

    const [liked, setLiked] = useState(localStorage.getItem('liked') === 'true' || false);

    useEffect(()=>{
        localStorage.setItem('liked', JSON.stringify(liked));
    }, [liked]);

    function handleLike(){
        setLiked(!liked);
    }

    return (
        <div>
            <button style={{ margin: "20px", backgroundColor: liked ? "red" : "white", color: liked ? "white" : "black" }} onClick={handleLike}>
                {liked ? "❤️Liked" : "🤍Like"}
            </button>
        </div>
    )
}