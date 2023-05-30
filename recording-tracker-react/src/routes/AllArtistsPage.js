import ArtistList from "../components/Lists/ArtistList";

const AllArtistsPage = ({ recordingData }) => {
    return (
        <ArtistList artists={recordingData} />
    );
}

export default AllArtistsPage;