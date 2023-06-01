import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@mui/material";

const EditForm = ({ artist, submit }) => {
    const [artistName, setArtistName] = useState('');

    useEffect(() => {
        setArtistName(artist.name);
    }, [artist]);

    const onArtistNameChange = (event) => {
        setArtistName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit("edit", { name: artistName });
    }

    return (
        <Card>
            <CardHeader
                title={"Edit Artist"}
            />
            <CardContent>
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={artistName} onChange={onArtistNameChange} />
                    <button type="submit">Save</button>
                </form>
            </CardContent>
        </Card >);
}

export default EditForm;