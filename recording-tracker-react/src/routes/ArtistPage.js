import { useParams } from 'react-router-dom';
import Artist from '../components/Elements/Artist';
import Album from '../components/Elements/Album';
import ElementList from '../components/Lists/ElementList';
const ArtistPage = ({ artists, albums, handleAction }) => {
    const { id } = useParams();

    const artist = artists.find((artist) => artist.id === Number(id));

    const albumNodes = artist ?
        albums.filter((e => e.artistId === artist.id)).map(
            (album) => <Album key={album.id} album={album} artist={artist} handleAction={handleAction} />)
        : null;

    return (
        <div>
            {artist && <Artist artist={artist} expanded={true} handleAction={handleAction} />}
            <ElementList listNodes={albumNodes} elementName={"Albums"} />
        </div>
    );
}

export default ArtistPage;


