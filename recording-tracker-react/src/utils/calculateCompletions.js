const calculateCompletion = (elements) => {
    const totalElements = elements.length;
    const sumCompletion = elements.reduce((total, element) => total + element.completion, 0);
    return Math.round(sumCompletion / totalElements);
};

export const calculateCompletions = (data) => {
    console.log(data)
    data.forEach(artist => {
        artist.children.forEach(album => {
            album.children.forEach(song => {
                song.completion = calculateCompletion(song.children);
            });
            album.completion = calculateCompletion(album.children);
        });
        artist.completion = calculateCompletion(artist.children);
    });
    console.log('data', data)
    return data;
}