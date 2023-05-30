import { useParams } from 'react-router-dom';
import Artist from '../components/Elements/Artist';
const ArtistPage = ({ recordingData }) => {
    const { id } = useParams();
    console.log('id', id);
    const artist = recordingData.find((artist) => artist.id === Number(id));


    return (<Artist artist={artist} />);
}

export default ArtistPage;