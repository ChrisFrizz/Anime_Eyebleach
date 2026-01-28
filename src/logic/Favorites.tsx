/**
 * @const getFavorites checks localStorage to retrieve items
 * 
 * @returns data with the list of URLs of the saved images
 * 
 */

export const getFavorites = (): string[] => {
  const data = localStorage.getItem('favoriteImages');
  return data ? JSON.parse(data) : [];
};

/**
 * @const toggleFavorite Tags an image with the 'favorite' label, then saves its URL
 * @param url
 * 
 * @const index indexes and controls the list
 *              if an image is saved, index checks if it's present in the list
 *              pushes if it's not present and removes the item if the like is removed
 * 
 *
 * @returns isNowLiked checks if the image has been added or removed, returning true or false respectively 
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
