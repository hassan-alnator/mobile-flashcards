import React, {AsyncStorage} from 'react-native';
import Promise from 'bluebird'

/**
 * reset decks list to localStorage
 *
 * @param {Object} decks
 * @returns
 */
const setDecks = (decks) => {
    try {
        AsyncStorage.setItem('flashCardsStoreDecks', JSON.stringify(decks));

    } catch (error) {}

    return decks
}

/**
 * retrive list of decks from localStorage
 *
 * @returns
 */
export const getDecks = async() => {

    try {
        const value = await AsyncStorage.getItem('flashCardsStoreDecks');

        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        return {}
    }

    return {}
}

/**
 * add a new deck to the decks list and then save
 *
 * @param {Object} deck
 */
export const saveDeckTitle = async(deck) => {

    try {
        getDecks().then(decks => {

            const decksList = {
                ...decks
            }

            decksList[deck.title] = deck;

            setDecks(decksList)

        }).catch(e => console.log(e))
    } catch (e) {
        console.log(e)
    }

}

/**
 * add a new card to a deck
 *
 * @param {String} title
 * @param {Object} card
 * @returns
 */
export const addCardToDeck = async(title, card) => {
    try {
        const decks = await getDecks();

        decks[title]
            .questions
            .push(card);

        setDecks(decks)

        return decks

    } catch (e) {
        return false
    }
    return false
}
