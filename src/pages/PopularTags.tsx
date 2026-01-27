import { useState } from "react";
import LikeButton from "../components/LikeButton";
import axios from "axios";

export default function PopularTags() {

    const [imageURL, setImageURL] = useState("");
    const [imageURLCompressed, setImageURLCompressed] = useState("");
    const [highQuality, setHighQuality] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    if (loading) return <h3>Caricamento in corso</h3>
    if (err) return <h3>Si è verificato un errore: {err}</h3>

    async function fetchImage(value: string) {
        setLoading(true);
        setErr(null);

        try {
            const res = await axios.get(value);
            setImageURL(res.data.image.original.url);
            setImageURLCompressed(res.data.image.compressed.url);
            setHighQuality(false);
            console.log(imageURLCompressed);
        } catch (err: any) {
            console.error("Error fetching image:", err.message);
        } finally{
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Here are the most popular tags:</h1>

            <div className="btn-group">
                <button style={{ marginRight: '10px', marginTop: '10px' }}

                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/catgirl')
                    }}>
                    catgirl
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/foxgirl')
                    }}>
                    foxgirl
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/wolfgirl')
                    }}>
                    wolfgirl
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/animal-ears')
                    }}>
                    animal ears
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/tail')
                    }}>
                    tail
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/tail-with-ribbon')
                    }}>
                    tail with ribbon
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/tail-from-under-skirt')
                    }}>
                    tail from under-skirt
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/cute')
                    }}>
                    cute
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/maid')
                    }}>
                    maid
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/vtuber')
                    }}>
                    v-tuber
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/w-sitting')
                    }}>
                    w-sitting
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/lying-down')
                    }}>
                    lying down
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/hands-forming-a-heart')
                    }}>
                    heart hands
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/wink')
                    }}>
                    wink
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/thigh-high-socks')
                    }}>
                    thigh-high socks
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/knee-high-socks')
                    }}>
                    knee-high socks
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/white-thigh')
                    }}>
                    white tighs
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/black-thigh')
                    }}>
                    black tighs
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/heterochromia')
                    }}>
                    homophobia💛💙
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/uniform')
                    }}>
                    uniform
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/hoodie')
                    }}>
                    hoodie
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/ribbon')
                    }}>
                    ribbon
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/white-hair')
                    }}>
                    white hair
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/blue-hair')
                    }}>
                    blue hair
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/long-hair')
                    }}>
                    long hair
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/blonde')
                    }}>
                    blonde
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/blue-eyes')
                    }}>
                    blue eyes
                </button>

                <button
                    style={{ marginRight: '10px', marginTop: '10px' }}
                    onClick={() => {
                        fetchImage('https://api.nekosia.cat/api/v1/images/purple-eyes')
                    }}>
                    purple eyes
                </button>

            </div>


            {imageURLCompressed && !highQuality && (
                <>
                    <div style={{ height: '20px', marginBottom: '30px' }}>
                        <button style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            padding: '5px 20px',
                            fontSize: '16px',
                        }}
                            onClick={() => {
                                setHighQuality(true);
                                console.log(imageURL);
                            }}>
                            High Quality?
                        </button>
                    </div>
                    <div>
                        <img
                            src={imageURLCompressed}
                            style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
                        />
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <LikeButton imageUrl={imageURLCompressed} />
                    </div>
                </>
            )}
            {imageURL && highQuality && (
                <>
                    <div style={{ height: '20px', marginBottom: '30px' }}>
                        <button style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            padding: '5px 20px',
                            fontSize: '16px',
                        }}
                            onClick={() => {
                                setHighQuality(false);
                                console.log(imageURLCompressed);
                            }}>
                            Lower Quality?
                        </button>
                    </div>
                    <img
                        src={imageURL}
                        style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
                    />
                    <div style={{ marginTop: '30px' }}>
                        <LikeButton imageUrl={imageURL} />
                    </div>
                </>
            )}
        </>
    )
}