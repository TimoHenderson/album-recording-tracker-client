import { useParams } from 'react-router-dom';
import SongList from '../components/SongList';
const AlbumPage = ({ recordingData }) => {
    const { artistId, albumId } = useParams();
    const artist = recordingData.find((artist) => artist.id === Number(artistId));
    const album = artist.albums.find((album) => album.id === Number(albumId));

    return (<div>
        {artist && <h2>{artist.name}</h2>}
        {album && <SongList artist={artist} album={album} />}
    </div>);
}

export default AlbumPage;