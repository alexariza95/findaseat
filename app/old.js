import React, { useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage,
        KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';
//import logo from './assets/logo.png';
import LoginView from './components/LoginView';



export default class App extends React.Component {

  state={
     email:"",
     password:"",
     loading:false,
     message:""
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>FindAseaT</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});