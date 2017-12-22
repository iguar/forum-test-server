import * as constants from '../constants';

const initialState = [];

const messagesList = (state=initialState, action) => {
    switch (action.type) {
        case constants.MESSAGES_FETCHED:
            state = action.payload.messages;
            return state;
        default:
            return state;
    }
};

export default messagesList;