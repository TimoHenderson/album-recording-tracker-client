import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BaseAccordion = ({ summary, details, expanded }) => {
    return (
        <Accordion elevation={6} expanded={expanded}>
            <AccordionSummary
                expandIcon={!expanded && <ExpandMoreIcon />}
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </Accordion>);
}

export default BaseAccordion;