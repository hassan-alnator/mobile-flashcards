import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {Ionicons} from '@expo/vector-icons';

class Quiz extends React.PureComponent {

    static navigationOptions = {
        title: 'Quiz'
    };

    state = {
        cards: this.props.navigation.state.params.questions,
        activeCard: false,
        activeIndex: 0,
        cardSide: "question",
        correct: 0,
        incorrect: 0,
        completed: false
    }

    nextCard = () => {
        const newIndex = this.state.activeIndex + 1

        if (newIndex < this.state.cards.length) {

            this.setState(state => ({activeIndex: newIndex, activeCard: state.cards[newIndex]}))
        } else {
            this.setState({completed: true})
        }
    }

    submitCorrect = () => {
        this.setState((state) => ({
            correct: state.correct + 1
        }))

        this.nextCard()
    }

    submitIncorrect = () => {
        this.setState((state) => ({
            incorrect: state.incorrect + 1
        }))

        this.nextCard()
    }

    render() {
        const {params} = this.props.navigation.state;

        const card = this.state.cards[this.state.activeIndex]

        if (this.state.completed) {
            return (
                <View
                    style={[
                    {
                        flex: 1
                    },
                    styles.center
                ]}>

                    <Ionicons name="md-checkmark-circle" size={32} color="green"/>

                    <Text>Quiz Completed</Text>
                    <Text>Correct Rate is : {100 / ((this.state.correct + this.state.incorrect) / this.state.correct)}
                        %</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.flipperText}>Retake Quiz</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        if (params.questions.length > 0) {

            return (

                <View
                    style={[
                    styles.center, {
                        flex: 2
                    }
                ]}>
                    <Text style={styles.counter}>1 / {params.questions.length}</Text>
                    <View style={styles.center}>
                        <Text style={styles.quesion}>
                            {this.state.cardSide === "question"
                                ? card.question
                                : card.answer
}
                        </Text>

                        {this.state.cardSide === "question"
                            ? <TouchableOpacity onPress={() => this.setState({cardSide: "answer"})}>
                                    <Text style={styles.flipperText}>Answer</Text>
                                </TouchableOpacity>
                            : <TouchableOpacity onPress={() => this.setState({cardSide: "question"})}>
                                <Text style={styles.flipperText}>Question</Text>
                            </TouchableOpacity>
}
                    </View>

                    <View style={styles.center}>
                        <TouchableOpacity style={styles.correctButton} onPress={this.submitCorrect}>
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.incorrectButton} onPress={this.submitIncorrect}>
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )

        } else {
            return (
                <View style={styles.center}>
                    <Text style={styles.quesion}>You Need To Add A Card First !</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    counter: {
        fontSize: 13,
        alignSelf: "flex-start",
        margin: 5,
        fontWeight: "bold"
    },

    quesion: {
        fontSize: 22,
        textAlign: "center"
    },
    correctButton: {
        width: 150,
        padding: 7,
        backgroundColor: "green",
        marginBottom: 3,
        borderRadius: 5
    },
    incorrectButton: {
        width: 150,
        padding: 7,
        backgroundColor: "red",
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center",
        color: "#fff"
    },
    flipperText: {
        color: "red",
        margin: 10
    }
})

export default Quiz;