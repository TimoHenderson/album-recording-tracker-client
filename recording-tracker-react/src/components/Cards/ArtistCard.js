import BaseCard from "./BaseCard";


const ArtistCard = ({ artist }) => {
    return (
        <BaseCard element={artist} childKey={"albums"} link={`/artists/${artist.id}`} />
    );
}

export default ArtistCard; 