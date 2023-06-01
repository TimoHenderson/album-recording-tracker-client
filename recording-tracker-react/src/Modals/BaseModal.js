import { Modal, Box } from "@mui/material";

const BaseModal = ({ children, open, close }) => {
    return (
        <Modal
            open={open} onClose={close}
        >
            <Box>{children}</Box>
        </Modal>
    );
}

export default BaseModal;