export const addTeam = (teamSize) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_TEAM",
            payload: teamSize
        })
    }
}

export const removeTeam = (teamSize) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_TEAM",
            payload: teamSize
        })
    }
}

export const addEvent = (tournamentEvent) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EVENT",
            payload: tournamentEvent
        })
    }
}

export const removeEvent = (tournamentEvent) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EVENT",
            payload: tournamentEvent
        })
    }
}