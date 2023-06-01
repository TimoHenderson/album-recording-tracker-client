import BaseCard from "../Cards/BaseCard";

const Album = ({ artist, album, expanded }) => {

    const link = `/artists/${artist.id}/albums/${album.id}`;

    return (
        <BaseCard element={album} elementType={"Album"} childKey={"songs"} link={link} />
    );
}

export default Album;