import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AlbumList from "../Lists/AlbumList";
import { Link } from "react-router-dom";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Artist = ({ artist }) => {
    console.log('artist', artist);
    console.log('artist', artist.completion);
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Link to={`/artists/${artist.id}`}>
                    <Typography variant="h2">{artist.name}</Typography>
                </Link>
                <Typography variant="h4">{artist.completion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AlbumList artist={artist} />
            </AccordionDetails>
        </Accordion>


    );
}

export default Artist;