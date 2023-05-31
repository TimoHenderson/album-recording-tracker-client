import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BaseAccordion = ({ summary, details, expanded }) => {
    return (

        <Accordion elevation={5} variant={'elevated'} square={true} expanded={expanded} >
            <AccordionSummary expandIcon={!expanded && <ExpandMoreIcon />}
                sx={{
                    paddingLeft: '0px',
                    paddingRight: '0px'
                }}>
                {summary}
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    padding: 0,

                }}>
                {/* <Divider /> */}
                {details}

            </AccordionDetails>
        </Accordion>

    );
}

export default BaseAccordion;