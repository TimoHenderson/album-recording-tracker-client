import { Stack } from "@mui/material";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";

const BaseCard = ({ element, childKey, link }) => {
    return (
        <Stack spacing={1} sx={{ width: "100%" }}>
            <CardTitle elementName={element.name} link={link} />
            <CardDetails element={element} childKey={childKey} />
        </Stack>

    );
}

export default BaseCard;