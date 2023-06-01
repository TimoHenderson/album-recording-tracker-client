import { Modal, Box, Paper, Card } from "@mui/material";

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    border: '2px solid #555',
    boxShadow: 24,
    padding: '1rem',
};

const BaseModal = ({ children, open, close }) => {
    return (
        <Modal
            open={open} onClose={close}
        >
            <Card style={style}>{children}</Card>
        </Modal>
    );
}

export default BaseModal;