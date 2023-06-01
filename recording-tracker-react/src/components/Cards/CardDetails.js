import { Box, Typography } from "@mui/material";
import { capitalize } from "../../utils/stringUtils";

const CardDetails = ({ element }) => {

    const numChildString = `${element.childType}s: ${element.children.length}`;
    const completionString = `Completion: ${element.completion}%`;
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "left",

        }}>
            <Typography variant="inherit">{numChildString}</Typography>
            <Typography variant="inherit">{completionString}</Typography>
        </Box>
    );
}

export default CardDetails;