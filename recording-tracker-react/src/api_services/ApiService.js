import { calculateCompletions } from "../utils/calculateCompletions"

const baseURL = 'https://localhost:7014/api/'
// const baseURL = 'http://192.168.0.40:5101/api/Recording/'

export const fetchAllElement = async (endpoint, header) => {
    const response = await fetch(`${baseURL}${endpoint}/`, header);
    return await response.json();
}

export const fetchAllData = async (header) => {
    const artistsData = await fetchAllElement('artists', header);
    const albumsData = await fetchAllElement('albums', header);
    const songsData = await fetchAllElement('songs', header);
    const partsData = await fetchAllElement('parts', header);
    const data = calculateCompletions({ artistsData, albumsData, songsData, partsData });
    console.log('data', data);
    return data;
}
// export const getArtist = (id) => {
//     return fetch(baseURL + id)
//         .then(res => res.json())

// }

// export const updateArtist = (artist) => {
//     return fetch(baseURL + artist.id, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(artist)
//     })
//         .then(res => res.json())
// }



