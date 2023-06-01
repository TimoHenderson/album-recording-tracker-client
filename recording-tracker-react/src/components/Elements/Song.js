import BaseCard from "../Cards/BaseCard";

const Song = ({ artist, album, song, handleAction }) => {

    const link = `/artists/${artist.id}/albums/${album.id}/songs/${song.id}`

    return (
        <BaseCard element={song} elementType={"Song"} childKey={"parts"} link={link} />
    );
}

export default Song;

