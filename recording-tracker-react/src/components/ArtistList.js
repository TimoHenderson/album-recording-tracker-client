import Artist from "./Artist";



const ArtistList = ({ artists }) => {

    const artistNodes = artists.map((artist) => <Artist key={artist.id} artist={artist} />);

    return (
        <div>
            {artistNodes}
        </div>
    );
}

export default ArtistList;