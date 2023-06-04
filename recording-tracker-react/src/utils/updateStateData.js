export const updateStateData = (stateData, element) => {
    let parentIds = [];
    let currElement = element;
    while (currElement.parentId) {
        parentIds.push(currElement.parentId);
    }


}