import { useState } from 'react';

interface PostData {
    URL: string;
    TAGS: string;
    SAFE: boolean;
}

export default function Post() {

    const [status, setStatus] = useState("");
    const [url, setUrl] = useState("");
    const [tags, setTags] = useState("");
    const [safe, setSafe] = useState(false);
    const [color, setColor] = useState("#1a1a1a");
    const [clickCount, setClickCount] = useState(0);
    const [SFWText, setSFWText] = useState("SFW?");


    const handleSubmit = async () => {
        const data: PostData = { URL: url, TAGS: tags, SAFE: safe };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                setStatus('Thank you for your contribution!');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Something went wrong. Try again later');
        }
    };

    return (

        <>

            <h2>Would you like to contribute an image to the collection?</h2>
            <div>
                <input
                    style={{ marginTop: '10px', width: '250px' }}
                    type="text"
                    placeholder="Copy and paste your URL here"
                    value={url}
                    onChange={(event) => {
                        setUrl(event.target.value)
                    }
                    }
                />
            </div>
            <div>
                <input
                    style={{ marginTop: '20px', width: '250px' }}
                    type="text"
                    placeholder="Set the tags (example: catgirl, tail...)"
                    value={tags}
                    onChange={(event) => {
                        setTags(event.target.value)
                    }
                    }
                />
            </div>

            <div>
                <button
                    style={{ marginTop: '20px', backgroundColor: color }}
                    onClick={() => {
                        setClickCount(clickCount + 1)
                        {
                            clickCount % 2 == 0 && (
                                setColor('green'),
                                setSafe(true),
                                setSFWText('SFW ✅')
                            )
                        }
                        {
                            clickCount % 2 !== 0 && (
                                setColor('red'),
                                setSafe(false),
                                setSFWText('SFW ❌')
                            )
                        }
                    }}>
                    {SFWText}
                </button>
            </div>

            <div>
                <button
                    style={{ marginTop: '20px' }}
                    onClick={handleSubmit}>Send</button>
                <p>{status}</p>
            </div>


        </>

    );
};