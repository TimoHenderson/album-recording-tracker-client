import SongList from "../Lists/SongList";
import { Link } from "react-router-dom";
import { Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Album = ({ album, artist }) => {


    return (
        <div>
            <Accordion elevation={6}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Link to={`/artists/${artist.id}/albums/${album.id}`}>
                        <Typography variant="h4">{album.name}</Typography>
                    </Link>
                    <Typography variant="p">Completion: {album.completion}%</Typography>
                    <Typography variant="p">NumSongs: {album.songs.length}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SongList album={album} artist={artist} />
                </AccordionDetails>
            </Accordion>


        </div>
    );
}

export default Album;