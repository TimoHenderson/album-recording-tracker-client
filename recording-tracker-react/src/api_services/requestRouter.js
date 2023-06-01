export const updateElement = (element, elementType) => {
    switch (elementType) {
        case "artist":
            return updateArtist(element);
        // case "album":
        //     return updateAlbum(element);
        // case "song":
        //     return updateSong(element);
        // case "part":
        //     return updatePart(element);
        default:
            return;
    }
}