import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

function mapStateTopProps({decks}) {
    return {decks}
}

class DeckDetail extends React.PureComponent {

    static navigationOptions = {
        title: 'Deck Details'
    };

    render() {

        const {navigation, decks} = this.props;
        const {params} = navigation.state;

        // if deck is not found
        if (!decks.hasOwnProperty(params.title)) {
            return <Text
                style={{
                alignSelf: "center",
                marginTop: 70,
                fontSize: 20
            }}>Ops , Deck Not Found !</Text>
        }

        // get latest deck data from redux store
        const activeDeck = decks[params.title]

        return (

            <View style={styles.center}>

                <View style={styles.center}>
                    <Text style={styles.deck}>{activeDeck.title}</Text>
                    <Text style={styles.decksNumber}>
                        {`${activeDeck.questions.length} Cards`}
                    </Text>
                </View>

                <View style={styles.center}>
                    <TouchableOpacity
                        onPress=
                        {() =>navigation.navigate("AddQuestion",{...activeDeck})}
                        style={styles.addCardButton}>
                        <Text
                            style={[
                            styles.buttonText, {
                                color: "#000"
                            }
                        ]}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress=
                        {() =>navigation.navigate("Quiz",{...activeDeck})}
                        style={styles.startQuizButton}>
                        <Text
                            style={[
                            styles.buttonText, {
                                color: "#fff"
                            }
                        ]}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    deck: {
        fontSize: 30,
        height: 55
    },
    decksNumber: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#999898"
    },
    addCardButton: {
        width: 150,
        padding: 7,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginBottom: 3
    },
    startQuizButton: {
        width: 150,
        padding: 7,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        backgroundColor: "#000"
    },
    buttonText: {
        textAlign: "center"
    }
})

export default connect(mapStateTopProps)(DeckDetail);