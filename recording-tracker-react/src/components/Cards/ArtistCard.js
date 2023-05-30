import BaseCard from "./BaseCard";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ArtistCard = ({ artist }) => {
    return (
        <BaseCard>
            <Link to={`/artists/${artist.id}`}>
                <Typography variant="h4">{artist.name}</Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h4">Completion:{artist.completion}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="h4">numAlbums: {artist.albums.length}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </BaseCard>
    );
}

export default ArtistCard; 