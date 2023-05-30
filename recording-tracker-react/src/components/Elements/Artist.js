
import AlbumList from "../Lists/AlbumList";
import ArtistCard from "../Cards/ArtistCard";
import BaseAccordion from "../Cards/BaseAccordion";


const Artist = ({ artist }) => {
    const summary = <ArtistCard artist={artist} />;
    const details = <AlbumList artist={artist} />;
    return (
        <BaseAccordion
            summary={summary}
            details={details}
        />
    );
}

export default Artist;