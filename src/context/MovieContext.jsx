import React, { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movieIDs, setMovieIDs] = useState(() => {
        // Load from localStorage if exists
        const stored = localStorage.getItem('movieIDs');
        return stored ? JSON.parse(stored) : [];
    });

    const addMovieID = (id) => {
        setMovieIDs((prev) => {
            const updated = prev.includes(id) ? prev : [...prev, id];
            console.log('context: updated movieIDs ->', updated);
            return updated;
        });
    };

       const clearMovieIDs = () => {
        setMovieIDs([]);
    };

    // Save to localStorage on update
    useEffect(() => {
        localStorage.setItem('movieIDs', JSON.stringify(movieIDs));
    }, [movieIDs]);

    return (
        <MovieContext.Provider value={{ movieIDs, addMovieID ,clearMovieIDs}}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovie = () => useContext(MovieContext);
