import { Divider, Stack, Typography } from "@mui/material";

const ElementList = ({ listNodes, elementName }) => {
    return (
        <Stack sx={{ padding: "0rem" }}>
            {elementName &&
                <><Typography variant="body2" sx={{ padding: "0.5rem", margin: 0 }}>
                    {elementName}
                </Typography>
                    <Divider variant="middle" color="gray" />
                </>
            }
            {listNodes}
        </Stack>
    );
}

export default ElementList;