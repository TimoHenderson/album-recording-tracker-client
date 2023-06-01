import { useParams } from 'react-router-dom';
import Artist from '../components/Elements/Artist';
import Album from '../components/Elements/Album';
import ElementList from '../components/Lists/ElementList';
const ArtistPage = ({ recordingData }) => {
    const { id } = useParams();

    const artist = recordingData.find((artist) => artist.id === Number(id));

    const albumNodes = artist ?
        artist.albums.map((album) => <Album key={album.id} album={album} artist={artist} />)
        : null;

    return (
        <div>
            {artist && <Artist artist={artist} expanded={true} />}
            <ElementList listNodes={albumNodes} elementName={"Albums"} />
        </div>
    );
}

export default ArtistPage;