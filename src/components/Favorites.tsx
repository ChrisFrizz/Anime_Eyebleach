/**
 * @const getFavorites controlla localStorage per prendere gli item nello storage
 * 
 * @returns data con la lista di url delle immagini salvate
 * 
 */

export const getFavorites = (): string[] => {
  const data = localStorage.getItem('favoriteImages');
  return data ? JSON.parse(data) : [];
};

/**
 * @const toggleFavorite si occupa di mettere la label 'favorite' a un'immagine, quindi salvare il suo url
 * @param url dell'immagine
 * 
 * @const index fa da indice e controllo alla lista
 *              se un'immagine viene salvata, index controlla se è presente nella lista
 *              pusha se non è presente e toglie se viene tolto il like
 * 
 *
 * @returns isNowLiked controlla se l'immagine è stata aggiunta, o se è stata rimossa 
 */

export const toggleFavorite = (url: string): boolean => {
  const favorites = getFavorites();
  const index = favorites.indexOf(url);
  let isNowLiked = false;

  if (index === -1) {
    favorites.push(url);
    isNowLiked = true;
  } else {
    favorites.splice(index, 1);
    isNowLiked = false;
  }

  localStorage.setItem('favoriteImages', JSON.stringify(favorites));
  return isNowLiked;
};
