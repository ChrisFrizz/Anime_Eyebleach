import { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from '../logic/Favorites';

interface URL {
  imageUrl: string;
}

/**
 * @function LikeButton reusable component for saving images
 * @param imageUrl is the URL of the image to save into localStorage
 * 
 * useEffect takes the image URL and adds it to the list (see Favorites.tsx)
 * handleLike (see Favorites.tsx)
 * 
 * @returns Like button that automatically updates its text and localStorage
*/

export default function LikeButton({imageUrl}: URL) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsLiked(favorites.includes(imageUrl));
  }, [imageUrl]);

  const handleLike = () => {
    const status = toggleFavorite(imageUrl);
    setIsLiked(status);
  };

  return (
    <button
      onClick={handleLike}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>

  );
};
