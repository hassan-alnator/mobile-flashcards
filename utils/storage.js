import React, {AsyncStorage} from 'react-native';
import Promise from 'bluebird'

//AsyncStorage.clear()

export const setDecks = (decks) => {

    try {
        AsyncStorage.setItem('flashCardsStoreDecks', JSON.stringify(decks));

    } catch (error) {}

    return decks

}

export async function getDecks() {

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

const getDeck = async(title) => {
    try {

        const decks = await getDecks();

        if (decks.hasOwnProperty(title)) {
            return decks[title]
        }

        return false;

    } catch (error) {
        return false
    }
}

export async function saveDeckTitle(deck) {

    getDecks().then(decks => {

        const decksList = decks
        decksList[deck.title] = deck;
        setDecks(decksList)

    }).catch(e => console.log(e))

}

export const addCardToDeck = async(title, card) => {
    try {
        const decks = await getDecks();

        decks[title]
            .questions
            .push(card);

        setDecks(decks)

        return decks

    } catch (e) {}
}
