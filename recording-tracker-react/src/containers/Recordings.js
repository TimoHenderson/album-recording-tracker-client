import React, { useState, useEffect } from 'react';
import { fetchAllArtists } from '../api_services/ArtistsService';
import ArtistList from '../components/ArtistList';

const Recordings = () => {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const getArtists = async () => {
            const artistsFromServer = await fetchAllArtists();
            setArtists(artistsFromServer);
        }
        getArtists();
    }, []);
    return (
        < ArtistList artists={artists} />
    );
}

export default Recordings;