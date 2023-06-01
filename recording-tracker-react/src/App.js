

import { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllRecordingData } from './api_services/RecordingDataService';
import { Container } from '@mui/material';
import AllArtistsPage from './routes/AllArtistsPage';
import ArtistPage from './routes/ArtistPage';
import AlbumPage from './routes/AlbumPage';
import SongPage from './routes/SongPage';
import AppThemeProvider from './themes/AppThemeProvider';
import { darkTheme } from './themes/darkTheme';

function App() {
  const [recordingData, setRecordingData] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const data = await fetchAllRecordingData();
      console.log('data', data);
      setRecordingData(data);
    }
    getArtists();
  }, []);

  const handleAction = (action, element, payload) => {
    console.log('handleAction', action, element, payload);
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
            <Route path="artists" element={<AllArtistsPage recordingData={recordingData} handleAction={handleAction} />} />
            <Route path="artists/:id" element={<ArtistPage recordingData={recordingData} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId" element={<AlbumPage recordingData={recordingData} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId/songs/:songId" element={<SongPage recordingData={recordingData} handleAction={handleAction} />} />
          </Routes>
        </Container>
      </Router >
    </AppThemeProvider>
  );
}

export default App;
