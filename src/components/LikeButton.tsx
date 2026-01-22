import { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from './Favorites';

interface Props {
  imageUrl: string;
}

export default function LikeButton({ imageUrl }: Props) {
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
