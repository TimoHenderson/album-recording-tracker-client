import PartList from "./PartList";

const Song = ({ song }) => {
    return (
        <div>
            <p>{song.name}</p>
            <PartList parts={song.parts} />
        </div>
    );
}

export default Song;