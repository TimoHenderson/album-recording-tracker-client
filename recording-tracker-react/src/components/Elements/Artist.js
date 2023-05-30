import { Accordion, AccordionSummary, AccordionDetails, Card } from "@mui/material";
import AlbumList from "../Lists/AlbumList";


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArtistCard from "../Cards/ArtistCard";


const Artist = ({ artist }) => {
    console.log('artist', artist);
    console.log('artist', artist.completion);
    return (
        <Card>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ArtistCard artist={artist} />
                </AccordionSummary>
                <AccordionDetails>
                    <AlbumList artist={artist} />
                </AccordionDetails>
            </Accordion>
        </Card>


    );
}

export default Artist;