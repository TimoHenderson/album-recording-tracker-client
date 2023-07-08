import { useParams } from 'react-router-dom';
import Song from '../components/Elements/Song';

import PartList from '../components/Lists/PartList';

const SongPage = ({ artists, albums, songs, parts, handleAction }) => {
    const { artistId, albumId, songId } = useParams();
    const artist = artists.find((artist) => artist.id === Number(artistId));
    const album = artist ? albums.find((album) => album.id === Number(albumId)) : null;
    const song = album ? songs.find((song) => song.id === Number(songId)) : null;
    const filteredParts = song ? parts.filter((part) => part.songId === Number(songId)) : [];
    console.log('filteredParts', filteredParts);

    return (
        <div>
            {artist && <h2>{artist.name}</h2>}
            {album && <h3>{album.name}</h3>}
            {song && <Song artist={artist} album={album} song={song} expanded={true} handleAction={handleAction} />}
            <PartList artist={artist} album={album} song={song} parts={filteredParts} handleAction={handleAction} />;
        </div>
    );
}

export default SongPage;