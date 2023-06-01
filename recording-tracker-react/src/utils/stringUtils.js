export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const capitalizeSingular = (string) => {
    if (string.endsWith("s")) {
        string = string.slice(0, -1);
    }
    return capitalize(string);
}