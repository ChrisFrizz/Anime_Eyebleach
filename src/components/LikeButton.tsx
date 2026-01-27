import { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from './Favorites';

interface URL {
  imageUrl: string;
}

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
