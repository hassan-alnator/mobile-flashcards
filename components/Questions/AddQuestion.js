import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {addCardToDeck} from '../../actions'

class AddQuestion extends React.PureComponent {

    static navigationOptions = {
        title: "Add Card"
    }

    state = {
        question: "",
        answer: ""
    }

    submitQuestion = () => {

        const title = this.props.navigation.state.params.title;

        this.setState({question: "", answer: ""});

        this
            .props
            .dispatch(addCardToDeck(title, this.state.question, this.state.answer))

        this
            .props
            .navigation
            .goBack()
    }

    render() {

        return (
            <View style={{
                flex: 1
            }}>
                <Text style={styles.titleQuestionText}>Add A New Qestion Card
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Question"
                    value={this.state.question}
                    onChangeText=
                    { (question) => this.setState({question}) }></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="Answer"
                    value={this.state.answer}
                    onChangeText=
                    { (answer) => this.setState({answer}) }></TextInput>

                <TouchableOpacity style={styles.submitButton} onPress={this.submitQuestion}>
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
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        margin: 15,
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
});

export default connect()(AddQuestion)