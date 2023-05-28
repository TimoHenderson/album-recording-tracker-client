import AlbumList from "./AlbumList";

const Artist = ({ artist }) => {

    return (<div>
        <h1>{artist.name}</h1>
        <AlbumList albums={artist.albums} />
    </div>);
}

export default Artist;