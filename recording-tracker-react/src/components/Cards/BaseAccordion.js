import { Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BaseAccordion = ({ summary, details, expanded }) => {
    return (
        <div>
            <Accordion elevation={5} expanded={expanded} disableGutters
                sx={{
                    '& .MuiPaper-root': {
                        color: 'darkslategray',
                        border: '3px groove silver',
                        borderRadius: '1rem',
                    },
                }}>
                <AccordionSummary expandIcon={!expanded && <ExpandMoreIcon />}>
                    {summary}
                </AccordionSummary>
                <AccordionDetails>
                    {details}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default BaseAccordion;