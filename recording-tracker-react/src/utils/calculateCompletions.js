const calculateCompletion = (elements) => {
    const totalElements = elements.length;
    const sumCompletion = elements.reduce((total, element) => total + element.completion, 0);
    const completion = Math.round(sumCompletion / totalElements);
    return completion ? completion : 0;
};

export const calculateCompletions = ({ artistsData, albumsData, songsData, partsData }) => {
    console.log('calculateCompletions', artistsData, albumsData, songsData, partsData);
    artistsData.forEach(artist => {
        const albums = albumsData.filter(album => album.artistId === artist.id)
        albums.forEach(album => {
            const songs = songsData.filter(song => song.albumId === album.id)
            songs.forEach(song => {
                song.completion = calculateCompletion(partsData.filter(part => part.songId === song.id));
            });
            album.completion = calculateCompletion(songs);
        });
        artist.completion = calculateCompletion(albums);
    });
    console.log('calculateCompletions', artistsData, albumsData, songsData, partsData);
    return { artistsData, albumsData, songsData, partsData };
}