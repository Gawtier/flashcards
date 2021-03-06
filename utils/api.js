import AsyncStorage  from '@react-native-async-storage/async-storage';

const basisData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    Love:{
        title:'love',
        questions: [
            {
                question:"What is love ?",
                answer:" it is nothing"
            }
        ]
    }
};

export function loadInitialDecks() {
    try {
        Object.keys(basisData).forEach((key, index) => {
            AsyncStorage.setItem(key, JSON.stringify(basisData[key]))
        })
    } catch (e) {
        console.error(e)
    }
}

export function getDecks() {
    return AsyncStorage.getAllKeys().then(keys => {
        return AsyncStorage.multiGet(keys).then(stores => {
            return stores.map((result, i, store) => {
                let key = store[i][0];
                let value = JSON.parse(store[i][1]);
                if (value) {
                    return {
                        key,
                        title: value.title,
                        questions: value.questions
                    }
                }
            }).filter(items => {
                if (items) {
                    return typeof items.questions !== 'undefined'
                }
            })
        })
    })
}

export function getDeck(id) {
    return AsyncStorage.getItem(id)
}

export function addDeck(title) {
    try {
        return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }))
    } catch (e) {
        console.error(e)
    }
}

export function addCard(title, card) {
    try {
        AsyncStorage.getItem(title).then(result => {
            const data = JSON.parse(result)

            let questions = data.questions;
            questions.push(card)

            AsyncStorage.mergeItem(title, JSON.stringify({
                questions
            }))
        })
    } catch (e) {
        console.error(e)
    }
}