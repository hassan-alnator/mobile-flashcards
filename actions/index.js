import uuidv4 from "uuid/v4"
import * as constants from '../constants';
import * as storage from '../utils/storage';

const createDeckObject = (title) => {
    const id = uuidv4();
    return {id, title, questions: []}

}

const createQuestionObject = (question, answer) => {
    const id = uuidv4();
    return {id, question, answer}
}

const isLoading = () => ({type: constants.IS_LOADING})

const stopLoading = () => ({type: constants.STOP_LOADING})

export const getDecks = () => dispatch => {

    dispatch(isLoading())

    storage
        .getDecks()
        .then(decks => {
            dispatch({type: constants.GET_ALL_DECKS, decks})
            dispatch(stopLoading())
        })
        .catch(e => console.log(`getDeck Action Creator Error : ${e}`))
}

export const addDeck = title => dispatch => {

    const deck = createDeckObject(title)

    storage
        .saveDeckTitle(deck)
        .then(i => dispatch({type: constants.ADD_DECK, deck}))
        .catch(e => console.log(`setDeck Action Creator Error : ${e}`))

}

export const addCardToDeck = (title, deckQuestion, deckAnswer) => dispatch => {

    dispatch(isLoading())

    const question = createQuestionObject(deckQuestion, deckAnswer)

    storage
        .addCardToDeck(title, question)
        .then(i => {
            dispatch({type: constants.ADD_QUESTION, title, question})
            dispatch(stopLoading())
        })
}

export const addQuestion = (deck, question) => ({type: constants.ADD_QUESTION, deck, question})