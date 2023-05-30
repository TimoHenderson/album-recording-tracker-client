import { useParams } from 'react-router-dom';
import Album from '../components/Elements/Album';

const AlbumPage = ({ recordingData }) => {
    const { artistId, albumId } = useParams();
    const artist = recordingData.find((artist) => artist.id === Number(artistId));
    const album = artist ? artist.albums.find((album) => album.id === Number(albumId)) : null;

    return (
        <>
            {artist && <h2>{artist.name}</h2>}
            {album && <Album artist={artist} album={album} />}
        </>
    );
}

export default AlbumPage;