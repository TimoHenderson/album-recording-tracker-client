
import './App.css';
import { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllRecordingData } from './api_services/RecordingDataService';
import { calculateCompletions } from './utils/calculateCompletions';
import AllArtistsPage from './routes/AllArtistsPage';
import ArtistPage from './routes/ArtistPage';
import AlbumPage from './routes/AlbumPage';
import SongPage from './routes/SongPage';

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







  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="artists" element={<AllArtistsPage recordingData={recordingData} />} />
          <Route path="artists/:id" element={<ArtistPage recordingData={recordingData} />} />
          <Route path="artists/:artistId/albums/:albumId" element={<AlbumPage recordingData={recordingData} />} />
          <Route path="artists/:artistId/albums/:albumId/songs/:songId" element={<SongPage recordingData={recordingData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
