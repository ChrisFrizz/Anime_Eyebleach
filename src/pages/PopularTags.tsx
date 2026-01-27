import { useState } from "react";
import LikeButton from "../components/LikeButton";
import axios from "axios";
import { TagButton } from "../components/TagButton";

const TagList = [
    { TAG: "catgirl", url: "catgirl" },
    { TAG: "foxgirl", url: "foxgirl" },
    { TAG: "wolfgirl", url: "wolfgirl" },
    { TAG: "animal ears", url: "animal-ears" },
    { TAG: "tail", url: "tail" },
    { TAG: "tail with ribbon", url: "tail-with-ribbon" },
    { TAG: "tail from under skirt", url: "tail-from-under-skirt" },
    { TAG: "v-tuber", url: "vtuber"},
    { TAG: "w-sitting", url: "w-sitting"},
    { TAG: "lying down", url: "lying-down"},
    { TAG: "wink", url: "wink" },
    { TAG: "cute", url: "cute" },
    { TAG: "maid", url: "maid" },
    { TAG: "homophobia💛💙", url: "heterochromia" },
    { TAG: "heart hands", url: "hands-forming-a-heart" },
    { TAG: "thigh high socks", url: "thigh-high-socks" },
    { TAG: "knee high socks", url: "knee-high-socks" },
    { TAG: "white tights", url: "white-tights" },
    { TAG: "black tights", url: "black-tights" },
    { TAG: "uniform", url: "uniform" },
    { TAG: "hoodie", url: "hoodie" },
    { TAG: "ribbon", url: "ribbon" },
    { TAG: "white hair", url: "white-hair" },
    { TAG: "long hair", url: "long-hair" },
    { TAG: "blonde", url: "blonde" },
    { TAG: "blue eyes", url: "blue-eyes" },
    { TAG: "purple eye", url: "purple-eyes" },
];

export default function PopularTags() {

    const [imageURL, setImageURL] = useState("");
    const [imageURLCompressed, setImageURLCompressed] = useState("");
    const [highQuality, setHighQuality] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    async function fetchImage(tagURL: string) {
        setLoading(true);
        setErr(null);

        try {
            const url = `https://api.nekosia.cat/api/v1/images/${tagURL}`;
            const res = await axios.get(url);
            setImageURL(res.data.image.original.url);
            setImageURLCompressed(res.data.image.compressed.url);
            setHighQuality(false);
        } catch (err: any) {
            console.error("Error fetching image:", err.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <h3>Caricamento in corso</h3>
    if (err) return <h3>Si è verificato un errore: {err}</h3>

    return (
        <>
            <h1>Here are the most popular tags:</h1>

            <div className="btn-group">
                {TagList.map((tag) => (
                    <TagButton
                        tag={tag.TAG} 
                        tagURL={tag.url} 
                        onFetch={fetchImage} 
                    />
                ))}
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