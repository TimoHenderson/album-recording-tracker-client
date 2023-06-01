

import { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllArtists } from './api_services/ArtistService';
import { Container } from '@mui/material';
import AllArtistsPage from './routes/AllArtistsPage';
import ArtistPage from './routes/ArtistPage';
import AlbumPage from './routes/AlbumPage';
import SongPage from './routes/SongPage';
import AppThemeProvider from './themes/AppThemeProvider';
import { darkTheme } from './themes/darkTheme';

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const data = await fetchAllArtists();
      console.log('data', data);
      setArtists(data);
    }
    getArtists();
  }, []);

  const handleAction = (action, payload, element, elementType, parentIds) => {
    console.log('handleAction', action, element, payload);
    switch (action) {
      case "edit":
        console.log("edit", elementType, payload);
        break;
    }
  }

  return (
    <AppThemeProvider theme={darkTheme}>
      <Router>
        <AppHeader />
        <Container
          sx={{
            backgroundColor: "background.default",
            minHeight: "100vh",
            height: "auto",
            marginBottom: "10rem"
          }}
        >
          <Routes>
            <Route path="artists" element={<AllArtistsPage artists={artists} handleAction={handleAction} />} />
            <Route path="artists/:id" element={<ArtistPage artists={artists} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId" element={<AlbumPage artists={artists} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId/songs/:songId" element={<SongPage artists={artists} handleAction={handleAction} />} />
          </Routes>
        </Container>
      </Router >
    </AppThemeProvider>
  );
}

export default App;
