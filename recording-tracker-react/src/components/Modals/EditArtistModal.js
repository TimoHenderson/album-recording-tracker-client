import { useState } from "react";
import BaseModal from "./BaseModal";
import { Modal } from "@mui/material";
import EditForm from "../Forms/EditForm";
const EditArtistModal = ({ artist, submit, open, close }) => {
    console.log("EditArtistModal", artist)
    return (
        <BaseModal open={open} close={close}>
            {artist && <EditForm artist={artist} submit={submit} cancel={close} />}
        </BaseModal>
    );
}

export default EditArtistModal;