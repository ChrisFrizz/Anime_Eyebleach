import { useQuery } from "@tanstack/react-query"
import type { INekosiaResponse } from "../components/INekosiaResponse";
import { useState } from "react";
import LikeButton from "../components/LikeButton";

export default function PopularTags() {
    
    const [enabled, setEnabled] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [imageURLCompressed, setImageURLCompressed] = useState("");
    const [highQuality, setHighQuality] = useState(false);
    const [category, setCategory] = useState("");

    const { data, isLoading, error } = useQuery<INekosiaResponse>({
        enabled: enabled,
        queryKey: ['images'],
        queryFn: async () => await fetch('https://api.nekosia.cat/api/v1/images/catgirl')
            .then(data => data.json())
    });


    if (isLoading) return <h3>Caricamento in corso</h3>
    if (error) return <h3>Si è verificato un errore: {error.message}</h3>

    return (
        <>
            <h1>Here are the most popular tags:</h1>
            <button style={{marginRight:'10px'}}
            
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                catgirl
            </button>

            <button
                style={{marginRight:'10px', marginTop:'10px'}}
                onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                foxgirl
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                maid
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                waifu
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                neko
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                cute
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                animal ears
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                cat ears
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                white hair
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                thigh-high socks
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                v-tuber
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                tail with ribbon
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                school uniform
            </button>

            <button 
            style={{marginRight:'10px', marginTop:'10px'}}
            onClick={() => {
                setEnabled(true);
                if (data) {
                    setImageURLCompressed(data.image.compressed.url);
                    setImageURL(data.image.original.url);
                    setHighQuality(false);
                }
            }}>
                smile
            </button>

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