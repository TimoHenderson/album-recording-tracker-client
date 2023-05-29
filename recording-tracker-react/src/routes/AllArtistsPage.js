import ArtistList from "../components/ArtistList";

const AllArtistsPage = ({ recordingData }) => {
    return (
        <ArtistList artists={recordingData} />
    );
}

export default AllArtistsPage;