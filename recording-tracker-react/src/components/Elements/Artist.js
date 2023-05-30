
import AlbumList from "../Lists/AlbumList";
import BaseCard from "../Cards/BaseCard";
import BaseAccordion from "../Cards/BaseAccordion";


const Artist = ({ artist }) => {
    const link = `/artists/${artist.id}`;
    const summary = <BaseCard element={artist} childKey={"albums"} link={link} />;
    const details = <AlbumList artist={artist} />;
    return (
        <BaseAccordion
            summary={summary}
            details={details}
        />
    );
}

export default Artist;