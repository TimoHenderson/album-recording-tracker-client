import { Box } from "@mui/material";

const CompletionMeter = ({ childElements }) => {

    const meterNodes = childElements ? childElements.map((element) => {
        const completion = element.completion;
        return (
            <Box key={element.id} sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", gap: "1px" }}>
                <Box height={`${100 - completion}%`} key={`off${element.id}`} sx={{ background: "#00FF0022", width: "100%" }}></Box>
                <Box height={`${completion}%`} key={`on${element.id}`} sx={{ background: "#00DD00", width: "100%" }}></Box>
            </Box>
        );
    }) : null;

    return (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "1px", background: "black", width: "100%", height: "100%", border: "1px solid silver", boxSizing: "border-box", padding: "1px" }}>
            {meterNodes}
        </Box>
    );
}

export default CompletionMeter;