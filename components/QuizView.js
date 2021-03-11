import React, { Component } from 'react';
import { Text, View,  TouchableOpacity, KeyboardAvoidingView } from 'react-native';


class QuizView extends Component {
    state = {
        questionId: 0,
        result: 0,
        showQuestion: true
    }
    handleCorrect = () => {
        this.setState({
            result: this.state.result + 1,
            questionId: this.state.questionId + 1
        })
    }
    handleIncorrect = () => {
        this.setState({
            questionId: this.state.questionId + 1
        })
    }
    render() {
        const { deck } = this.props.route.params
        const { questionId, result, showQuestion } = this.state

        if (!deck.questions.length) return (<View><Text>Add some questions to get started.</Text></View>)

        if (questionId === deck.questions.length) {
            return <View style={
                {
                    flex:1,
                    justifyContent:'space-between',
                    margin: 30
                }
            }>
                <View><Text>Out of {deck.questions.length}, your score is : {result}</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("DeckView", {deck})}><Text>Back to deck</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState(
                        {
                            questionId: 0,
                            result: 0,
                            showQuestion: true
                        }
                    )}><Text>Restart Quiz</Text>
                </TouchableOpacity>
                </View>
            </View>
        }

// When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
//Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

        return (
            <KeyboardAvoidingView behavior="padding" style={
                {
                    margin: 30,
                    justifyContent: "space-between"
                }
            }>
                <View>
                    <Text
                        style={
                            {
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>
                        {deck.title} deck
                    </Text>
                    <Text
                        style={{ textAlign: 'center' }}>Showing question # {questionId} out of {deck.questions.length}</Text>
                    <Text
                        style={
                            {
                                textAlign: 'right',
                                marginTop: 15
                            }
                        }>Score : {result}</Text>
                </View>
                <View
                    style={{
                        marginTop: 40
                    }}>
                    <Text
                        style={
                            {
                                fontSize: 50,
                                textAlign: 'center'
                            }
                        }>
                        {showQuestion ?
                            deck.questions[questionId].question
                            : deck.questions[questionId].answer}
                    </Text>
                </View>
                <View
                    style={
                        {
                            marginTop: 20
                        }
                    }>
                    <Text
                        style={{
                            textAlign: 'right'
                        }}
                        onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}>Show
                        {showQuestion ? " answer" : " question"}
                    </Text>
                </View>
                <View
                    style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 20
                        }
                    }>
                    <TouchableOpacity
                        onPress={this.handleCorrect}><Text>Correct</Text></TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.handleIncorrect}><Text>Incorrect</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default QuizView;