const addTeam = (state = 0, action) => {
    switch (action.type) {
        case "ADD_TEAM":
            return state + action.payload;
        case "REMOVE_TEAM":
            return state - action.payload;
        default:
            return state
    }
};

export default addTeam;