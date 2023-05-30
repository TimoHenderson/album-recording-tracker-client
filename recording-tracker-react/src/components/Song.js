import PartList from "./PartList";
import { Link } from 'react-router-dom';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Card } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Song = ({ song, album, artist }) => {
    return (
        <Card>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Link to={`/artists/${artist.id}/albums/${album.id}/songs/${song.id}`}>
                        <Typography variant="h4">{song.name}</Typography>
                    </Link>
                </AccordionSummary>
                <AccordionDetails>
                    <PartList artist={artist} album={album} song={song} />
                </AccordionDetails>
            </Accordion>


        </Card>
    );
}

export default Song;