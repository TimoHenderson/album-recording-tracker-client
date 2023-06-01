import { useState } from "react";
import BaseCard from "../Cards/BaseCard";
import EditArtistModal from "../../Modals/EditArtistModal";

const Artist = ({ artist, handleAction }) => {
    const [openEditModal, setOpenEditModal] = useState(false);

    const openModal = (modalName) => {
        if (modalName === "edit") setOpenEditModal(true);
    }
    const closeEdit = () => { setOpenEditModal(false); }

    const link = `/artists/${artist.id}`;
    return (
        <>
            <BaseCard element={artist} elementType={"Artist"} childKey={"albums"} link={link} openModal={openModal} />
            <EditArtistModal artist={artist} open={openEditModal} close={closeEdit} handleAction={handleAction} />
        </>
    );
}

export default Artist;