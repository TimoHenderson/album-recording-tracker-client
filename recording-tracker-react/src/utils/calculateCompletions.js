const calculateCompletion = (elements) => {
    const totalElements = elements.length;
    const sumCompletion = elements.reduce((total, element) => total + element.completion, 0);
    return Math.round(sumCompletion / totalElements);
};

export const calculateCompletions = (data) => {
    console.log(data)
    data.forEach(artist => {
        artist.albums.forEach(album => {
            album.songs.forEach(song => {
                song.completion = calculateCompletion(song.parts);
            });
            album.completion = calculateCompletion(album.songs);
        });
        artist.completion = calculateCompletion(artist.albums);
    });
    console.log('data', data)
    return data;
}