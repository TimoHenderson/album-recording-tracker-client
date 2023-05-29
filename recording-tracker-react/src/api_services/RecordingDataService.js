const baseURL = 'https://localhost:5101/api/Recording/'

export const fetchAllRecordingData = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getRecording = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}



