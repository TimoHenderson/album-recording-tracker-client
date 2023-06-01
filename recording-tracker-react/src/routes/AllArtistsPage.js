import ElementList from "../components/Lists/ElementList";
import Artist from "../components/Elements/Artist";

const AllArtistsPage = ({ recordingData, handleAction }) => {
    const artistNodes = recordingData ?
        recordingData.map(
            (artist) => <Artist key={artist.id} artist={artist} handleAction={handleAction} />)
        : null;
    return (
        <div>
            <ElementList listNodes={artistNodes} elementName={"Artists"} />
        </div>
    );
}

export default AllArtistsPage;