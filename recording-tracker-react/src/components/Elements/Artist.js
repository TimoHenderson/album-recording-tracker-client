import Album from "../Elements/Album";
import ElementList from "../Lists/ElementList";
import BaseCard from "../Cards/BaseCard";
import BaseAccordion from "../Cards/BaseAccordion";


const Artist = ({ artist }) => {
    const link = `/artists/${artist.id}`;
    const summary = <BaseCard element={artist} childKey={"albums"} link={link} />;
    const albumNodes = artist.albums.map((album) => <Album key={album.id} album={album} artist={artist} />);
    const details = <ElementList listNodes={albumNodes} />;
    return (
        <BaseAccordion
            summary={summary}
            details={details}
        />
    );
}

export default Artist;