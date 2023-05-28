import Album from "./Album";

const AlbumList = ({ albums }) => {
    const albumNodes = albums.map((album) => <Album key={album.id} album={album} />);

    return (<div>{albumNodes}</div>);
}

export default AlbumList;