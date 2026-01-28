/**
 * @interface TagButton
 * 
 * @param tag = tag name
 * @param tagURL = what to put at the end of the URL for a correct API call
 * @function onFetch = this is where the Fetch function is entered (see PopularTags.tsx)
 */

interface TagButton {
    tag: string;
    tagURL: string;
    onFetch: (tagId: string) => void;
}

/**
 * Button Creation Component
 * @param tag, tagURL
 * @function onFetch
 * 
 * @returns styled buttons creation and onClick effect
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