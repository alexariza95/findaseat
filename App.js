import React, { useEffect } from "react";
import { Image,  StyleSheet, Text, TouchableOpacity, BackHandler, View, Alert } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';



export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);
 /**
  * Attaches an event listener that handles the android-only hardware
  * back button
  * @param  {Function} callback The function to call on click
  */
  const handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      callback();
      return true;
    });
  };
  /**
   * Removes the event listener in order not to add a new one
   * every time the view component re-mounts
   */
  const removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', () => {});
  }


  let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
        return;
      }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }

      Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
   return (
     <View style={styles.container}>
         <Image
           source={{ uri: selectedImage.localUri }}
           style={styles.thumbnail}
         />
         <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                   <Text style={styles.buttonText}>Share this picture</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.button}>
                   <Text style={styles.buttonText}>Go back</Text>
         </TouchableOpacity>
     </View>
   );
  }


  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions}>
          To share a pic with your friends use the button below
        </Text>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain",
      marginBottom: 20,
    },
button:{
  backgroundColor: '#74A878',
  width: 200,
  padding: 15,
  borderRadius: 10,
},
buttonText: {
  fontSize: 20,
  color: '#fff',
},
logo: {
  width: 250,
  height: 180,
  marginBottom: 10,
},
instructions: {
  color: '#00D310',
  fontSize: 20,
  marginHorizontal: 40,
  marginBottom: 20,
},
});
