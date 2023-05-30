import ElementList from "../components/Lists/ElementList";
import Artist from "../components/Elements/Artist";

const AllArtistsPage = ({ recordingData }) => {
    const artistNodes = recordingData ? recordingData.map((artist) => <Artist key={artist.id} artist={artist} />) : null;
    return (
        <ElementList listNodes={artistNodes} />
    );
}

export default AllArtistsPage;