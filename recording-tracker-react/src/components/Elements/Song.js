import BaseCard from "../Cards/BaseCard";

const Song = ({ artist, album, song, expanded }) => {

    const link = `/artists/${artist.id}/albums/${album.id}/songs/${song.id}`

    return (
        <BaseCard element={song} childKey={"parts"} link={link} />
    );
}

export default Song;