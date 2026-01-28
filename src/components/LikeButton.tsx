import { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from './Favorites';

interface URL {
  imageUrl: string;
}

/**
 * @function LikeButton componente riutilizzabile per salvare immagini
 * @param imageUrl è l'url dell'immagine da salvare in localStorage
 * 
 * useEffect prende l'URL dell'immagine e lo aggiunge alla lista (vedi Favorites.tsx)
 * handleLike (vedi Favorites.tsx)
 * 
 * @returns bottone del like che aggiorna localStorage e il suo testo in automatico 
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
