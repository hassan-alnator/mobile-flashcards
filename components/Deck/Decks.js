import React from 'react';
import PropTypes from 'prop-types'

import {View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import {getDecks} from '../../actions'

import Loading from '../Loading'
import Deck from './Deck';

class Decks extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getDecks())
    }

    renderDecks = ({item}) => {
        return <Deck key={item.title} {...item} {...this.props}/>
    }

    /**
     * Reformating Data From Object To Array and adding the key to work proprly with the flatList Component
     *
     * @memberof Decks
     */
    reformatToList = () => {

        const {decks} = this.props;

        let list = [];

        Object
            .keys(decks)
            .forEach(deck => {
                // adding a key key to each item in the array
                decks[deck].key = decks[deck].id;
                list.push(decks[deck])
            });

        return list

    }

    render() {

        const {decks, isLoading} = this.props;

        // if app is still loading
        if (isLoading) 
            return <Loading/>

            // if there is no decks
        if (Object.keys(decks).length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.addDecksMsg}>
                        Add Some Decks First !
                    </Text>
                </View>
            )
        }

        // if the app is not loading and we have decks to display
        return (
            <View style={styles.container}>
                <FlatList data={this.reformatToList(decks)} renderItem={this.renderDecks}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addDecksMsg: {
        textAlign: "center",
        fontSize: 22,
        marginTop: 50
    }
})

Decks.propTypes = {
    decks: PropTypes.object.isRequired
}

export default Decks;