import SongList from "../Lists/SongList";
import BaseCard from "../Cards/BaseCard";
import BaseAccordion from "../Cards/BaseAccordion";

const Album = ({ artist, album }) => {
    const link = `/artists/${artist.id}/albums/${album.id}`;
    const summary = <BaseCard element={album} childKey={"songs"} link={link} />;
    const details = <SongList album={album} artist={artist} />;
    // `/artists/${artist.id}/albums/${album.id}`
    return (
        <BaseAccordion
            summary={summary}
            details={details}
        />
    );
}

export default Album;