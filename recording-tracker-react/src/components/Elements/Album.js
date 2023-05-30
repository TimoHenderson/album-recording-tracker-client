import BaseCard from "../Cards/BaseCard";
import BaseAccordion from "../Cards/BaseAccordion";
import ElementList from "../Lists/ElementList";
import Song from "../Elements/Song";

const Album = ({ artist, album, expanded }) => {
    const link = `/artists/${artist.id}/albums/${album.id}`;
    const summary = <BaseCard element={album} childKey={"songs"} link={link} />;
    const songNodes = album.songs.map((song) => <Song key={song.id} song={song} album={album} artist={artist} />);
    const details = <ElementList listNodes={songNodes} />;
    return (
        <BaseAccordion
            summary={summary}
            details={details}
            expanded={expanded}
        />
    );
}

export default Album;