import ACTION from '../actions/actionTypes';

const initialState = {
    events: []
};

const eventReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.ADD_EVENT: {
            return {
                ...state,
                events: [...state.events, action.data],
            }
        }
        case ACTION.REMOVE_EVENT: {
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.data.id)
            }
        }
        default:
            return state;
    }
};

export default eventReducer;