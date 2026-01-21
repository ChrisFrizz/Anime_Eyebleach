import axios from "axios";
import { useState } from "react";

export default function RandomImage() {

    const [imageURL, setImageURL] = useState("");
    const [imageURLCompressed, setImageURLCompressed] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [highQuality, setHighQuality] = useState(false);

    const fetchNekoImage = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await axios.get('https://api.nekosia.cat/api/v1/images/catgirl');
            setImageURL(res.data.image.original.url);
            setImageURLCompressed(res.data.image.compressed.url);
            setCategory(res.data.category);
            setHighQuality(false);
            console.log(setImageURLCompressed);
        } catch (err: any) {
            setError(err.message);
            console.error("Error fetching image:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <h3>Caricamento in corso</h3>
    if (error) return <h3>Si è verificato un errore: {error}</h3>

    return (
        <>
            <div style={{ height: '20px', marginBottom: '30px'}}>
                <button 
                style={{ 
                    marginTop: '20px',
                    marginBottom: '20px',
                    padding: '5px 20px', 
                    fontSize: '16px',
                }}
                onClick={fetchNekoImage}>
            Random Neko Image
            </button>
            </div>

            <div style={{ height: '20px', marginBottom: '30px' }}>
                <button style={{ 
                    marginTop: '20px',
                    marginBottom: '20px',
                    padding: '5px 20px', 
                    fontSize: '16px',
                }}
                onClick={()=>{setHighQuality(true)}}>
                High Quality
                </button>
            </div>
            
            {imageURLCompressed && imageURLCompressed.length === 0 && <p>Nessuna immagine con questo URL</p>}
            {!loading && imageURLCompressed && !highQuality && (
                <img
                    src={imageURLCompressed}
                    alt={category}
                    style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
                />
            )}
            {!loading && imageURL && highQuality && (
                <img
                    src={imageURL}
                    alt={category}
                    style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
                />
            )}
        </>
    );
}