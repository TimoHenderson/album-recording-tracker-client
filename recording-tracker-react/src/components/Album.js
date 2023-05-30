import SongList from "./SongList";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Album = ({ album, artist }) => {


    return (
        <div>
            <Link to={`/artists/${artist.id}/albums/${album.id}`}>
                <Typography variant="h4">{album.name}</Typography>
            </Link>
            <SongList album={album} artist={artist} />
        </div>
    );
}

export default Album;