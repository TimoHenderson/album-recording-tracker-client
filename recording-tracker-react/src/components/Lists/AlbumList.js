import Album from "../Elements/Album";


const AlbumList = ({ artist }) => {
    const albumNodes = artist.albums.map((album) => <Album key={album.id} album={album} artist={artist} />);
    return (
        <div>{albumNodes}</div>
    );
}

export default AlbumList;