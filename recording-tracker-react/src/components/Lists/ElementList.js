import { Stack } from "@mui/material";

const ElementList = ({ listNodes }) => {
    return (
        <Stack spacing={1}>
            {listNodes}
        </Stack>
    );
}

export default ElementList;