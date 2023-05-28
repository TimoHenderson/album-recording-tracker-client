import Song from "./Song";
const SongList = ({ songs }) => {
    const songNodes = songs.map((song) => <Song key={song.id} song={song} />);
    return (
        <div className="song-list">
            {songNodes}
        </div>
    );
}

export default SongList;