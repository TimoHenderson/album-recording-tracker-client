import { Stack } from "@mui/material";
import Artist from "../Elements/Artist";



const ArtistList = ({ artists }) => {

    const artistNodes = artists ? artists.map((artist) => <Artist key={artist.id} artist={artist} />) : null;

    return (
        <Stack spacing={2}>
            {artistNodes}
        </Stack>
    );
}

export default ArtistList;