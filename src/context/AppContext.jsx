import React, { createContext, useState } from 'react';

// Create context
export const AppContext = createContext();

// Context provider
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null); // optional user info
    const [wishlist, setWishlist] = useState([]); // array of movie IDs

    // Add movie ID to wishlist only if it doesn't already exist
    const addFavorite = (activeMovieId) => {
        if (!wishlist.includes(activeMovieId)) {
            setWishlist([...wishlist, activeMovieId]);
        }
    };

    // Optional: store user info
    const storeUser = (userObject) => {
        setUser(userObject); // e.g., { id: '123', name: 'John Doe' }
    };

    return (
        <AppContext.Provider value={{ user, storeUser, wishlist, addFavorite }}>
            {children}
        </AppContext.Provider>
    );
};
