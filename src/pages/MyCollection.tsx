import { useEffect, useState } from 'react';
import { getFavorites } from '../components/Favorites';
import { useNavigate, useLocation, type Location } from 'react-router-dom';
import type { ILoginNavigateState } from './Login';


export default function FavoritesPage() {
  const [savedImages, setSavedImages] = useState<string[]>([]);
  const location: Location<ILoginNavigateState> = useLocation();
    const navigate = useNavigate();
    
    const username = location.state?.username ?? "Guest";

    useEffect(()=>{
        if (!location.state) navigate("/login");
    }, [location, navigate]);

  useEffect(() => {
    const favorites = getFavorites();
    setSavedImages(favorites);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">{username}'s Favorites</h2>
      
      {savedImages.length === 0 ? (
        <p className="text-gray-500">You haven't liked any images yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {savedImages.map((url) => (
            <div key={url} className="relative group overflow-hidden rounded-lg">
              <img 
                src={url} 
                alt="Favorite" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white underline"
                >
                  View Full
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
