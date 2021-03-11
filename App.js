import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewQuestion from './components/NewQuestion'
import NewDeck from './components/AddDeck'
import QuizView from './components/QuizView'
import DeckList from './components/DeckList'
import DeckView from './components/DeckListView'
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { setLocalNotification } from './utils/notifications'

const Stack = createStackNavigator()

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="DeckList"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="DeckList"
        component={DeckList}
        options={{ title: 'DeckList' }}
      />
      <Stack.Screen
        name="NewDeck"
        component={NewDeck}
        options={{ title: 'Add a Deck' }}
      />
      <Stack.Screen
        name="QuizView"
        component={QuizView}
        options={{ title: 'QuizView' }}
      />
      <Stack.Screen
        name="DeckView"
        component={DeckView}
        options={{ title: 'DeckView' }}
      />
      <Stack.Screen
        name="NewQuestion"
        component={NewQuestion}
        options={{ title: 'NewQuestion' }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <ThemeProvider>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 30

  },
});

/*

Tip
To manage your AsyncStorage database, you'll want to create four different helper methods.

getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.


*/