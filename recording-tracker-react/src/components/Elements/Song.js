import PartList from "../Lists/PartList";
import BaseCard from "../Cards/BaseCard";
import BaseAccordion from "../Cards/BaseAccordion";

const Song = ({ artist, album, song, expanded }) => {
    const link = `/artists/${artist.id}/albums/${album.id}/songs/${song.id}`
    const summary = <BaseCard element={song} childKey={"parts"} link={link} />;
    const details = <PartList artist={artist} album={album} song={song} />;
    return (
        <BaseAccordion
            summary={summary}
            details={details}
            expanded={expanded}
        />
    );
}

export default Song;