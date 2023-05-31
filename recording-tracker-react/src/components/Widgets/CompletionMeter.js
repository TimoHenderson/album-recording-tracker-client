import { Box, Stack } from "@mui/material";

const CompletionMeter = ({ childElements }) => {
    console.log("childElements", childElements);
    const meterNodes = childElements ? childElements.map((element) => {
        const completion = element.completion;
        return (


            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                <Box height={`${100 - completion}%`} key={element.id} sx={{ background: "#00FF0044", width: "100%" }}></Box>
                <Box height={`${completion}%`} key={element.id} sx={{ background: "#00DD00", width: "100%" }}></Box>
            </Box>


        );
    }) : null;
    console.log(meterNodes);
    return (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "2px", background: "black", width: "100%", padding: "2px" }}>
            {/* <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
                width="100%"
            > */}
            {meterNodes}
            {/* </Stack> */}
        </Box>
    );
}

export default CompletionMeter;