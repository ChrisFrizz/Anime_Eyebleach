interface TagButton {
    tag: string;
    tagURL: string;
    onFetch: (tagId: string) => void;
}

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