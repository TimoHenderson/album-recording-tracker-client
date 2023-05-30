import { useParams } from 'react-router-dom';
import Artist from '../components/Elements/Artist';
const ArtistPage = ({ recordingData }) => {
    const { id } = useParams();
    const artist = recordingData.find((artist) => artist.id === Number(id));
    return (
        <>
            {artist && <Artist artist={artist} expanded={true} />}
        </>
    );
}

export default ArtistPage;