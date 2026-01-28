import { useState } from 'react';

/**
 * @interface PostData
 * 
 * @param URL da inserire in barra di testo
 * @param TAGS per lista di tags
 * @param SAFE per indicare se SFW o NSFW
 */

interface PostData {
    URL: string;
    TAGS: string;
    SAFE: boolean;
}

/**
 * @function Post simula chiamata POST a un API
 * 
 * @const status è il feedback della chiamata POST
 * @const color, clickCount e SFWText controllano come si comporta il bottone SFW
 *           color prima neutro passa a verde o rosso
 *           clickCount controlla lo stato in cui passare in base a se %2 == 0 o no
 *           SFWText è il testo da caricare sul bottone con ✅ e ❌ per accessibilità
 * 
 * @async handleSubmit si occupa della POST call
 * 
 * @returns 2 sezioni di input per URL e lista tag da applicare
 *          bottone SFW che cambia colore e testo in base al numero di click
 *          bottone per "mandare" chiamata POST
 */

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