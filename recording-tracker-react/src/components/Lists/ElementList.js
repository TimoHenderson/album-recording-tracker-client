import { Stack, Box } from "@mui/material";

const ElementList = ({ listNodes }) => {
    return (
        <Stack spacing={1} sx={{ paddingTop: "1rem" }}>
            {listNodes}
        </Stack>

    );
}

export default ElementList;