import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation';

import DecksContainer from './Container'
import DeckDetail from './DeckDetail'
import NewDeck from './NewDeck'
import AddQuestion from '../Questions/AddQuestion'
import Quiz from '../Quiz/Quiz'

// Main Tabs Of Main Decks Component
const Tabs = TabNavigator({
    Decks: {
        screen: DecksContainer,
        navigationOptions: {
            tabBarLabel: "Decks"
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: "New Deck"
        }
    }
})

// Main Details Stack Component
const DockStackNav = StackNavigator({
    DecksMain: {
        screen: Tabs
    },
    DecksDetail: {
        screen: DeckDetail
    },
    Quiz: {
        screen: Quiz
    },
    AddQuestion: {
        screen: AddQuestion
    }
}, {initialRouteName: 'DecksMain'});

// Component Containing the Main Navigation
const DeckListView = () => (
    <View style={styles.container}>
        <DockStackNav/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DeckListView;