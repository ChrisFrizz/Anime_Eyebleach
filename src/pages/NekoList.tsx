import axios from "axios";
import { useState, useEffect } from "react";
import type { INekoImage } from "../hook/TNekoImageList";


export default function NekoList(){
    const [data, setData] = useState<INekoImage[]>([]);

    const fetchNekoImage = async () => {
    try {
      const res = await axios.get('https://api.nekosia.cat/api/v1/images/catgirl');
      const json = res.data;

      setData(json);
      console.log(json.image.original.url);
    }catch (err) {
      console.error(err);
        }
    };

    useEffect(() => {
      fetchNekoImage();
    }, []);

    return (
        <div>
            {data && data.map((photo: INekoImage) => {
                return(
                    <div key={(photo.id)} style={{marginBottom: '20px'}}>
                        <h4>{photo.id}</h4>
                        <img src={photo.image.original.url} /> 
                    </div>
                )
            })}
        </div>
    )
}