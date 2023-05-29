
import './App.css';
import { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllRecordingData } from './api_services/RecordingDataService';
import AllArtistsPage from './routes/AllArtistsPage';
import ArtistPage from './routes/ArtistPage';

function App() {
  const [recordingData, setRecordingData] = useState([]);
  useEffect(() => {
    const getArtists = async () => {
      const recordingData = await fetchAllRecordingData();
      setRecordingData(recordingData);
    }
    getArtists();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Routes>
          <Route path="/artists" element={<AllArtistsPage recordingData={recordingData} />} />
          <Route path="/artists/:id" element={<ArtistPage recordingData={recordingData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
