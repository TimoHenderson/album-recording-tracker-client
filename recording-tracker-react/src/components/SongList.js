import Song from "./Song";
const SongList = ({ album, artist }) => {
    const songNodes = album.songs.map((song) => <Song key={song.id} song={song} album={album} artist={artist} />);
    return (
        <div className="song-list">
            {songNodes}
        </div>
    );
}

export default SongList;