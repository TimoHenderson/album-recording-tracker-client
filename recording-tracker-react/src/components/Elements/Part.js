const Part = ({ part }) => {
    return (
        <div>
            <h4>{part.name}</h4>
            <p>{part.instrument.name}</p>
            <p>completion: {part.completion}</p>
        </div>
    );
}

export default Part;