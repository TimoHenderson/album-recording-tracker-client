import { Card, CardHeader, IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";
import CompletionMeter from "../Widgets/CompletionMeter";
import CardMenu from "./CardMenu";

const BaseCard = ({ element, link, openModal }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(link);
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar variant="square">
                        <CompletionMeter childElements={element.children} />
                    </Avatar>
                }
                title={element.name}
                subheader={<CardDetails element={element} />}
                action={<CardMenu element={element} openModal={openModal} />}
                onClick={handleCardClick}
            />
        </Card>
    );
}

export default BaseCard;