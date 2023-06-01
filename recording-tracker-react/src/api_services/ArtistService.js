import { calculateCompletions } from "../utils/calculateCompletions"

const baseURL = 'https://localhost:5101/api/Artist/'
// const baseURL = 'http://192.168.0.40:5101/api/Recording/'

export const fetchAllArtists = () => {
    return fetch(baseURL)
        .then(res => res.json())
        .then(data => calculateCompletions(data))
}

export const getArtist = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())

}

export const updateArtist = (artist) => {
    return fetch(baseURL + artist.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artist)
    })
        .then(res => res.json())
}



