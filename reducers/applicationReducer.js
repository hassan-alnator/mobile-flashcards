import * as constants from '../constants';

const defaultState = {
    isLoading: false
}

const applicationReducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.IS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case constants.STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}

export default applicationReducer