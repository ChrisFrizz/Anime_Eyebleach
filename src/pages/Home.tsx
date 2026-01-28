import background from '../background/background.jpg'

/**
 * HomePage of the site
 * @constant containerStyle = list of modifiers to apply to the background
 * @returns h1 welcome to the site
 */

export default function Home() {
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        display: 'flex-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
    };

    return (
        <div style={containerStyle}>
            <h1>Welcome to Anime Eyebleach</h1>
        </div>
    );
};
