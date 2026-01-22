export const getFavorites = (): string[] => {
  const data = localStorage.getItem('nekosia_favorites');
  return data ? JSON.parse(data) : [];
};

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

  localStorage.setItem('nekosia_favorites', JSON.stringify(favorites));
  return isNowLiked;
};
