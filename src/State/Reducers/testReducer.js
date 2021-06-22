const Reducer = (state = 0, action) => {
    switch (action.type) {
        case "add_team":
            return state + action.payload;
        case "remove_team":
            return state - action.payload;
        default:
            return state
    }
};

export default Reducer;