import Part from "../Elements/Part";

const PartList = ({ artist, album, song }) => {
    const partNodes = song.children.map((part) =>
        <Part key={part.id} artist={artist} album={album} song={song} part={part}
        />);

    return (
        <div>
            {partNodes}
        </div>
    );
}

export default PartList;