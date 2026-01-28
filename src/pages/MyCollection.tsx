import { useEffect, useState } from 'react';
import { getFavorites } from '../logic/Favorites';
import { useNavigate, useLocation, type Location } from 'react-router-dom';
import type { ILoginNavigateState } from './Login';

/**
 * @function FavoritesPage collection of images saved in localStorage, after a login
 * 
 * @import react-router-dom
 * 
 * @const location and navigate checks whether a login has been made
 *                              and redirects to the appropriate page (see Login.tsx) 
 * 
 * @const favorites gets the images saved in localStorage
 * @const savedImages this is the list that will be checked to see the amount of images and act accordingly
 * 
 * @returns check savedImages; if no images have been added, it displays a message
 *                             otherwise, it displays the list of images with the associated styles
 */

export default function FavoritesPage() {
  const [savedImages, setSavedImages] = useState<string[]>([]);
  const location: Location<ILoginNavigateState> = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username ?? "Guest";

  useEffect(() => {
    if (!location.state) navigate("/login");
  }, [location, navigate]);

  useEffect(() => {
    const favorites = getFavorites();
    setSavedImages(favorites);
  }, []);

  return (
    <div>
      <h2>{username}'s Favorites</h2>

      {savedImages.length === 0 ? (
        <p>You haven't liked any images yet!</p>
      ) : (
        <div>
          {savedImages.map((url) => (
            <div>
              <img
                src={url}
                alt="Favorite"
                style={{ 
                  marginTop: '20px', 
                  maxWidth: '100%', 
                  maxHeight: '600px', 
                  borderRadius: '10px' 
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
