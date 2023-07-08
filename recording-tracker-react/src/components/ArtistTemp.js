const ArtistTemp = ({ artistData }) => {
    return (
        <div>
            <h2>{artistData.name}</h2>
            <p>{artistData.type}</p>
        </div>
    );
}

export default ArtistTemp;