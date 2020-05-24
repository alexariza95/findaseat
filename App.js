// <ROOT>/App.js

import * as React from 'react';
import { Button, View, Text, TextInput   } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  Platform
} from 'react-native';

import LoginView from './components/LoginView';
import BookList from './components/book-class.js';
const axios = require('axios');



function HomeScreen({ route, navigation }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Log in"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Go to List of books"
            onPress={()=> navigation.navigate('BooksList') }
          />
        </View>
  );
}
/*
<KeyboardAvoidingView
              behavior={Platform.OS === 'android' ? 'padding' : 'position'}
              style={{flex: 1}}
              enabled>
              <StatusBar barStyle="dark-content" />

              <SafeAreaView style={styles.container}>
                <LoginView />
              </SafeAreaView>
            </KeyboardAvoidingView>*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= 'screen' mode='modal'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'FindAseat' }}
        />
        <Stack.Screen name="BooksList" component={BookList}/>
        <Stack.Screen name="Login" component={LoginView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6"
  },
});
