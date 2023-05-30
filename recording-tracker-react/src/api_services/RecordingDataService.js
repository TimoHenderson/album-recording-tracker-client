import { calculateCompletions } from "../utils/calculateCompletions"

const baseURL = 'https://localhost:5101/api/Recording/'

export const fetchAllRecordingData = () => {
    return fetch(baseURL)
        .then(res => res.json())
        .then(data => calculateCompletions(data))
}

export const getRecording = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())

}



