import { Box, Typography } from "@mui/material";

const CardDetails = ({ element, childKey }) => {
    const children = element[childKey];
    const capitalizedChildKey = childKey.charAt(0).toUpperCase() + childKey.slice(1);
    const numChildString = `${capitalizedChildKey}: ${children.length}`;
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