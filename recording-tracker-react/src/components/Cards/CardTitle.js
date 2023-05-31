import { Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/material-ui/getting-started/installation/" {...props} />
));


const CardTitle = ({ elementName, link }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" color="inherit" sx={{ '& a': { color: 'inherit' } }}>
                <Link component={RouterLink} to={link} color="primary" variant="inherit">
                    {/* <Typography variant="a">{elementName}</Typography> */}
                    {elementName}
                </Link>
            </Typography>
        </Box>
    );
}

export default CardTitle;