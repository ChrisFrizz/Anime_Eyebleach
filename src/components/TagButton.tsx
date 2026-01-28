/**
 * @interface bottone dei tag
 * 
 * @param tag = nome del tag
 * @param tagURL = cosa mettere alla fine del URL per chiamata API corretta
 * @function onFetch = qui si inserisce la funzione per fare Fetch (vedi PopularTags.tsx)
 */

interface TagButton {
    tag: string;
    tagURL: string;
    onFetch: (tagId: string) => void;
}

/**
 * Componente per creazione bottoni
 * @param tag, tagURL
 * @function onFetch
 * 
 * @returns creazione di bottoni con stile definito e onClick
 */

export const TagButton = ({ tag, tagURL, onFetch }: TagButton) => {
    return (
        <button
            style={{ marginRight: '10px', marginTop: '10px' }}
            onClick={() => onFetch(tagURL)}
        >
            {tag}
        </button>
    );
};