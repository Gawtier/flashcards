import React, { Component } from 'react';
import {getDecks, loadInitialDecks} from "../utils/api";
import { Text, View, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


class DeckList extends Component {

    state = {
        decks:[]
    }

    componentDidMount() {
        loadInitialDecks();
        getDecks().then((decks) => {this.setState({decks: decks})});
    }
  
    componentDidUpdate() {
        getDecks().then((decks) => {this.setState({decks: decks})});
    }


    render() {
       const { navigation } = this.props

       if (!this.state.decks) return(<View><Text>Loading...</Text></View>)

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
                        List of all decks
                    </Text>
                </View>
                {Object.values(this.state.decks).map((deck) =>
                    <TouchableOpacity 
                    onPress={() => 
                    navigation.navigate('DeckView', {deck})}
                    key={deck.title}
                    style={
                        {
                            margin:10
                        }
                    }>
                        <Text>{deck.title} - {deck.questions.length} cards</Text>
                        <Text>Click for more info</Text>
                    </TouchableOpacity>
                )}
            <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('NewDeck')}><Text>Add a new Deck</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }
}

export default DeckList;
