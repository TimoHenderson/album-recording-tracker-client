import { useParams } from 'react-router-dom';
import AlbumList from '../components/AlbumList';
const ArtistPage = ({ recordingData }) => {
    const { id } = useParams();
    console.log('id', id);
    const artist = recordingData.find((artist) => artist.id === Number(id));


    return (<div>
        {artist && <h2>{artist.name}</h2>}
        {artist && <AlbumList artist={artist} />}
    </div>);
}

export default ArtistPage;