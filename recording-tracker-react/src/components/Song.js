import PartList from "./PartList";
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";

const Song = ({ song, album, artist }) => {
    return (
        <div>
            <Link to={`/artists/${artist.id}/albums/${album.id}/songs/${song.id}`}>
                <Typography variant="h4">{song.name}</Typography>
            </Link>
            <PartList artist={artist} album={album} song={song} />
        </div>
    );
}

export default Song;