import ACTION from '../actions/actionTypes';

const initialState = {
    events: []
};

export default function (state = initialState, action) {
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
                events: state.events.filter(event => event.id !== action.payload)
            }
        }
        default:
            return state;
    }
}