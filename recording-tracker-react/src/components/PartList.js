import Part from "./Part";

const PartList = ({ parts }) => {
    const partNodes = parts.map((part) => <Part key={part.id} part={part} />);

    return (
        <div>
            {partNodes}
        </div>
    );
}

export default PartList;