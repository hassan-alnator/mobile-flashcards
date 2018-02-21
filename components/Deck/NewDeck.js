import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {addDeck} from '../../actions'
import {connect} from 'react-redux'

class NewDeck extends React.Component {

    static navigationOptions = {
        title: 'Add New Deck'

    };

    state = {
        title: ""
    }

    submitTitle = () => {

        this
            .props
            .dispatch(addDeck(this.state.title))

        this.setState({title: ""});

        this
            .props
            .navigation
            .navigate('Decks')
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Text style={styles.titleQuestionText}>What is the title of your new deck ?</Text>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Deck Title"
                    value={this.state.title}
                    onChangeText={(title) => this.setState({title})}/>

                <TouchableOpacity style={styles.submitButton} onPress={this.submitTitle}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleQuestionText: {
        fontSize: 22,
        textAlign: "center",
        margin: 60
    },
    titleInput: {
        height: 45,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        padding: 5
    },
    submitButton: {
        width: 120,
        padding: 7,
        backgroundColor: "#000",
        marginTop: 30,
        borderRadius: 5,
        alignSelf: "center"
    },
    submitText: {
        color: "#fff",
        textAlign: "center"
    }
})

export default connect()(NewDeck);