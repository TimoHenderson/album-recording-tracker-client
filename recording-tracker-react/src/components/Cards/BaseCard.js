import { Card, CardHeader, IconButton, Avatar } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";
import CompletionMeter from "../Widgets/CompletionMeter";
import CardMenu from "./CardMenu";

const BaseCard = ({ element, childKey, link }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(link);
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar variant="square">
                        <CompletionMeter childElements={element[childKey]} />
                    </Avatar>
                }
                title={element.name}
                subheader={<CardDetails element={element} childKey={childKey} />}
                action={<CardMenu />}
                onClick={handleCardClick}
            />
        </Card>
    );
}

export default BaseCard;