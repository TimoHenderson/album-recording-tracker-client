import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Artist = ({ artist }) => {


    return (<div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Link to={`/artists/${artist.id}`}>
                    <Typography variant="h2">{artist.name}</Typography>
                </Link>
            </AccordionSummary>
            <AccordionDetails>

                <AlbumList artist={artist} />
            </AccordionDetails>
        </Accordion>


    </div>);
}

export default Artist;