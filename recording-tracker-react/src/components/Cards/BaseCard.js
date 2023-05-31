import { Stack, Box } from "@mui/material";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import CompletionMeter from "../Widgets/CompletionMeter";

const BaseCard = ({ element, childKey, link }) => {
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr 5fr",
            width: "100%",
            padding: "0rem 0.5rem 0rem 0.5rem",
        }}>
            <CompletionMeter childElements={element[childKey]} />
            <Stack spacing={1} sx={{
                width: "100%",
                padding: "0rem 1rem 0rem 1rem"
            }}>
                <CardTitle elementName={element.name} link={link} />
                <CardDetails element={element} childKey={childKey} />
            </Stack>

        </Box>

    );
}

export default BaseCard;