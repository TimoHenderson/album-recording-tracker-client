import { useParams } from 'react-router-dom';
import AlbumList from '../components/AlbumList';
const ArtistPage = ({ recordingData }) => {
    const { id } = useParams();
    console.log(id);
    console.log(recordingData);
    const artist = recordingData.find((artist) => artist.id === Number(id));
    console.log(artist);

    return (<div>
        {artist && <h2>{artist.name}</h2>}
        {artist && <AlbumList albums={artist.albums} />}
    </div>);
}

export default ArtistPage;