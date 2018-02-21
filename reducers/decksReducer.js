import * as constants from '../constants';

const getAllDecks = (state, {decks}) => ({
    ...state,
    ...decks
})

const addDeck = (state, {deck}) => {
    return {
        ...state,
        [deck.title]: deck
    }
}

const addQuestion = (state, {title, question}) => ({
    ...state,
    [title]: {
        ...state[title],
        questions: [
            ...state[title].questions,
            question
        ]
    }
})

const DecksReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_QUESTION:
            return addQuestion(state, action)
        case constants.ADD_DECK:
            return addDeck(state, action);
        case constants.GET_ALL_DECKS:
            return getAllDecks(state, action)
        default:
            return state;
    }
}

export default DecksReducer;
