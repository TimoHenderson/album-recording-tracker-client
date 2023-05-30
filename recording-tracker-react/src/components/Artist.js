import { Typography } from "@mui/material";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";


const Artist = ({ artist }) => {


    return (<div>
        <Link to={`/artists/${artist.id}`}>
            <Typography variant="h2">{artist.name}</Typography>
        </Link>
        <AlbumList artist={artist} />
    </div>);
}

export default Artist;