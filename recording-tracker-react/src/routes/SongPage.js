import { useParams } from 'react-router-dom';
import Song from '../components/Elements/Song';

import PartList from '../components/Lists/PartList';

const SongPage = ({ artists, handleAction }) => {
    const { artistId, albumId, songId } = useParams();
    const artist = artists.find((artist) => artist.id === Number(artistId));
    const album = artist.children.find((album) => album.id === Number(albumId));
    const song = album.children.find((song) => song.id === Number(songId));


    return (
        <div>
            {artist && <h2>{artist.name}</h2>}
            {album && <h3>{album.name}</h3>}
            {song && <Song artist={artist} album={album} song={song} expanded={true} handleAction={handleAction} />}
            <PartList artist={artist} album={album} song={song} handleAction={handleAction} />;
        </div>
    );
}

export default SongPage;