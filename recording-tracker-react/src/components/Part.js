const Part = ({ part }) => {
    console.log(part.id);
    return (
        <div>
            <h4>{part.name}</h4>
            <p>{part.instrument.name}</p>
        </div>
    );
}

export default Part;