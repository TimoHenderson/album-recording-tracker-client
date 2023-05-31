import { Stack, Box } from "@mui/material";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import CompletionMeter from "../Widgets/CompletionMeter";

const BaseCard = ({ element, childKey, link }) => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "5fr 1fr", width: "100%" }}>
            <Stack spacing={1} sx={{ width: "100%" }}>
                <CardTitle elementName={element.name} link={link} />
                <CardDetails element={element} childKey={childKey} />
            </Stack>
            <CompletionMeter childElements={element[childKey]} />
        </Box>

    );
}

export default BaseCard;