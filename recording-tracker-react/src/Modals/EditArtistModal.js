import { useState } from "react";
import BaseModal from "./BaseModal";
import { Modal } from "@mui/material";
const EditArtistModal = ({ artist, update, open, close }) => {
    return (
        <BaseModal open={open} close={close}>
            <h1>Edit Artist</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={"Hi"} />
                <button type="submit">Save</button>
            </form>
        </BaseModal>
    );
}

export default EditArtistModal;