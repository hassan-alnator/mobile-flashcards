import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Deck = ({id, title, questions, navigation}) => (
    <TouchableOpacity
        onPress=
        {() => navigation.navigate("DecksDetail", {id, title, questions})}>

        <View style={styles.container}>
            <Text style={styles.deck}>{title}</Text>
            <Text style={styles.decksNumber}>
                {`${questions.length} Cards`}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#999898'
    },
    deck: {
        padding: 10,
        fontSize: 25,
        height: 50,
        textAlign: 'center'
    },
    decksNumber: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#999898",
        textAlign: 'center'
    }

})

export default Deck;