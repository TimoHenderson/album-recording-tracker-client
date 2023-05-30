import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BaseAccordion = ({ summary, details }) => {
    return (
        <Accordion elevation={6} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </Accordion>);
}

export default BaseAccordion;