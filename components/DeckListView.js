import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Touchable } from 'react-native';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


class DeckView extends Component {
    render() {
        const { deck } = this.props.route.params
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
                        Deck {deck.title} with {deck.questions.length} cards
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("NewQuestion", {title:deck.title})}><Text>Add a question</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("QuizView", { deck })}><Text>Start Quiz</Text></TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

export default DeckView;