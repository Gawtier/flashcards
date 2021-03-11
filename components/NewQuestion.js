import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addCard } from '../utils/api'


class NewQuestion extends Component {
    state = {
        question:"",
        answer:""
    }

    render() {
        const { question, answer } = this.state
        const { title } = this.props.route.params


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
                                fontSize: 30
                            }
                        }>
                        Add a question to this deck
                    </Text>
                </View>
                <View style={{margin:10}}>
                    <Text>
                        Add a question
                    </Text>
                    <TextInput
                        value={question}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ question: text })} />

                </View>
                <View style={{margin:10}}>
                    <Text>
                        Add an answer
                    </Text>
                    <TextInput
                        value={answer}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ answer: text })}
                    />
                    <TouchableOpacity
                        title="Press me"
                        style={
                            {
                                alignItems: "center",
                                backgroundColor: "#DDDDDD",
                                padding: 10, 
                                marginTop:15
                            }
                        }
                        onPress={() => {
                            addCard(title, {
                                question: this.state.question,
                                answer: this.state.answer,
                            });
                            this.props.navigation.navigate('DeckList');
                        }}                    
                        >
                        <Text>
                            Press here
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default NewQuestion;