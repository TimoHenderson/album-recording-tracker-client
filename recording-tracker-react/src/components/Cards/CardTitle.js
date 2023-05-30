import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const CardTitle = ({ elementName, link }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to={link}>
                <Typography variant="h4">{elementName}</Typography>
            </Link>
        </Box>
    );
}

export default CardTitle;