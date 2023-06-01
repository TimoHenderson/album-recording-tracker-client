import BaseCard from "../Cards/BaseCard";

const Album = ({ artist, album, handleAction }) => {

    const link = `/artists/${artist.id}/albums/${album.id}`;

    return (
        <BaseCard element={album} link={link} />
    );
}

export default Album;