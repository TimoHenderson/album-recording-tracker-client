import BaseCard from "../Cards/BaseCard";

const Artist = ({ artist, expanded }) => {
    const link = `/artists/${artist.id}`;
    return (
        <BaseCard element={artist} elementType={"Artist"} childKey={"albums"} link={link} />
    );
}

export default Artist;