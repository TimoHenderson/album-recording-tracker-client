import Artist from "../Elements/Artist";



const ArtistList = ({ artists }) => {

    const artistNodes = artists ? artists.map((artist) => <Artist key={artist.id} artist={artist} />) : null;

    return (
        <div>
            {artistNodes}
        </div>
    );
}

export default ArtistList;