import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addDeck } from '../utils/api'


class NewDeck extends Component {
    state = {
        deckName: ""
    }

    render() {
        const { deckName } = this.state
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
                        Create a new deck
                    </Text>
                </View>
                <View style={{margin:10}}>
                    <Text>
                        Name of the deck
                    </Text>
                    <TextInput
                        value={deckName}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ deckName: text })} />

                </View>
                <View style={{margin:10}}>
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
                            addDeck(this.state.deckName);
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

export default NewDeck;