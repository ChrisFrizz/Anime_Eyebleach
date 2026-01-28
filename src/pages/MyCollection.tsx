import { useEffect, useState } from 'react';
import { getFavorites } from '../components/Favorites';
import { useNavigate, useLocation, type Location } from 'react-router-dom';
import type { ILoginNavigateState } from './Login';

/**
 * @function FavoritesPage collezione di immagini salvate in localStorage, dietro a un login
 * 
 * @import react-router-dom
 * 
 * @const location e navigate si occupano di controllare se è stato effettuato il login 
 *                            e reindirizzare sulla pagina appropriata (vedi Login.tsx)
 * 
 * @const favorites prende le immagini salvate nel localStorage
 * @const savedImages è la lista che può essere controllata per vedere il numero e agire di conseguenza
 * 
 * @returns controllo su savedImages, se non sono state aggiunte immagini mostra il messaggio
 *                                    altrimenti mostra la lista di immagini con gli stili associati
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
            <div key={url}>
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
