import { useState } from "react";
import LikeButton from "../components/LikeButton";
import { useQuery } from "@tanstack/react-query";

export default function RandomImage() {

    const [highQuality, setHighQuality] = useState(false);

    const { data, isLoading, error } = useQuery({
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        queryKey: ["Image"],
        queryFn: async () => await fetch('https://api.nekosia.cat/api/v1/images/random')
            .then(data => data.json())
    });

    if (isLoading) return <h3>Caricamento in corso</h3>;
    if (error) return <h3>Si è verificato un errore: {(error as Error).message}</h3>;

    if (!data || !data.image) return null;

    return (
        <>
            {data && !highQuality && (
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

                    <img
                        src={data.image.compressed.url}
                        style={{
                            marginTop: '20px',
                            maxWidth: '100%',
                            maxHeight: '600px',
                            borderRadius: '10px'
                        }}
                    />

                    <div style={{ marginTop: '10px' }}>
                        <LikeButton imageUrl={data.image.compressed.url} />
                    </div>

                </>
            )}

            {data && highQuality && (
                <>
                    <div style={{ height: '20px', marginBottom: '30px' }}>
                        <button style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            padding: '5px 20px',
                            fontSize: '16px',
                        }}
                            onClick={() => {
                                setHighQuality(false)
                            }}>
                            Lower Quality?
                        </button>
                    </div>

                    <div>
                        <img
                            style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
                            src={data.image.original.url}
                        />
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <LikeButton imageUrl={data.image.original.url} />
                    </div>
                </>
            )}
        </>
    );
}