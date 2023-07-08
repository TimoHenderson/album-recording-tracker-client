import { useParams } from 'react-router-dom';
import Album from '../components/Elements/Album';
import Song from '../components/Elements/Song';
import ElementList from '../components/Lists/ElementList';

const AlbumPage = ({ artists, albums, songs, parts, handleAction }) => {
    const { artistId, albumId } = useParams();

    const artist = artists.find((artist) => artist.id === Number(artistId));

    const album = artist ? albums.find((album) => album.id === Number(albumId)) : null;

    const filteredSongs = album ? songs.filter(e => e.albumId === album.id) : [];
    const songNodes = filteredSongs.map(
        (song) => {
            const children = parts.filter((part) => part.songId === song.id);
            return <Song key={song.id} song={song} parts={children} album={album} artist={artist} handleAction={handleAction} />
        }
    )


    return (
        <>
            {artist && <h2>{artist.name}</h2>}
            {album && <Album artist={artist} album={album} expanded={true} handleAction={handleAction} />}
            <ElementList listNodes={songNodes} elementName={"Songs"} />
        </>
    );
}

export default AlbumPage;