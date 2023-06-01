import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { capitalizeSingular } from "../../utils/stringUtils";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardMenu = ({ elementType, childKey }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event, reason) => {
        console.log("onMenuClose", event, reason);
        event.stopPropagation();
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="menu-button"
                aria-controls={open ? 'card-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="card-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                <MenuItem onClick={handleClose}>{`Edit ${elementType}`}</MenuItem>
                <MenuItem onClick={handleClose}>{`New ${capitalizeSingular(childKey)}`}</MenuItem>
                <MenuItem onClick={handleClose}>{`Delete ${elementType}`}</MenuItem>
            </Menu>
        </div>
    );
}
export default CardMenu;