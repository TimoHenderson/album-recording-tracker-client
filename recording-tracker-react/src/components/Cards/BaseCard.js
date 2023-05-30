import { Card, Stack } from "@mui/material";

const BaseCard = ({ children }) => {
    return (

        <Stack>
            {children}
        </Stack>

    );
}

export default BaseCard;