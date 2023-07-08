

import { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import AllArtistsPage from './routes/AllArtistsPage';
import ArtistPage from './routes/ArtistPage';
import AlbumPage from './routes/AlbumPage';
import SongPage from './routes/SongPage';
import AppThemeProvider from './themes/AppThemeProvider';
import { darkTheme } from './themes/darkTheme';
import LoginPage from './routes/LoginPage';
import ProfilePage from './routes/ProfilePage';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchAllData } from './api_services/ApiService';

const treeStructure = ["Artist", "Album", "Song", "Part"];

const App = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [parts, setParts] = useState([]);

  // useEffect(() => {
  //   const getArtists = async () => {
  //     const data = await fetchAllArtists();
  //     console.log('data', data);
  //     setArtists(data);
  //   }
  //   getArtists();
  // }, []);

  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://localhost:7014',
            scope: 'read:posts',
          },
        });
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        const { artistsData, albumsData, songsData, partsData } = await fetchAllData(header);
        setArtists(artistsData);
        setAlbums(albumsData);
        setSongs(songsData);
        setParts(partsData);


      } catch (e) {
        // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

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
            <Route path="/" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="artists" element={<AllArtistsPage artists={artists} handleAction={handleAction} />} />
            <Route path="artists/:id" element={<ArtistPage artists={artists} albums={albums} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId" element={<AlbumPage artists={artists} albums={albums} songs={songs} parts={parts} handleAction={handleAction} />} />
            <Route path="artists/:artistId/albums/:albumId/songs/:songId" element={<SongPage artists={artists} albums={albums} songs={songs} parts={parts} handleAction={handleAction} />} />
          </Routes>
        </Container>
      </Router >
    </AppThemeProvider>
  );
}

export default App;
