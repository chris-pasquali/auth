import React, { Component } from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';



class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDJuKiV_buhUOwWap5TnLeEFcHSmYbExX0',
            authDomain: 'authentication-5a791.firebaseapp.com',
            databaseURL: 'https://authentication-5a791.firebaseio.com',
            projectId: 'authentication-5a791',
            storageBucket: 'authentication-5a791.appspot.com',
            messagingSenderId: '135112251613',
            appId: '1:135112251613:web:bd704f5470781d7e'
        });
    }
    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        ); 
    }
}

export default App;