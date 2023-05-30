import { useParams } from 'react-router-dom';
import Song from '../components/Elements/Song';


const SongPage = ({ recordingData }) => {
    const { artistId, albumId, songId } = useParams();
    const artist = recordingData.find((artist) => artist.id === Number(artistId));
    const album = artist.albums.find((album) => album.id === Number(albumId));
    const song = album.songs.find((song) => song.id === Number(songId));

    return (
        <div>
            {artist && <h2>{artist.name}</h2>}
            {album && <h3>{album.name}</h3>}
            {song && <h4>{song.name}</h4>}
            {song && <Song artist={artist} album={album} song={song} expanded={true} />}
        </div>
    );
}

export default SongPage;