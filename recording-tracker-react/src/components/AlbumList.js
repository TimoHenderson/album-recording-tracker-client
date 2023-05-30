import Album from "./Album";

const AlbumList = ({ artist }) => {
    console.log("artist", artist);
    console.log(artist.albums);
    const albumNodes = artist.albums.map((album) => <Album key={album.id} album={album} artist={artist} />);

    return (<div>{albumNodes}</div>);
}

export default AlbumList;