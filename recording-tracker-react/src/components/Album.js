import SongList from "./SongList";

const Album = ({ album }) => {
    return (
        <div>
            <h3>{album.name}</h3>
            <SongList songs={album.songs} />
        </div>
    );
}

export default Album;