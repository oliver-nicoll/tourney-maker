const addEvent = (state = 0, action) => {
    switch (action.type) {
        case "ADD_EVENT":
            return state + action.payload;
        case "REMOVE_EVENT":
            return state - action.payload;
        default:
            return state
    }
};

export default addEvent;