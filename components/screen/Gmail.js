import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin'
import React, { useEffect } from 'react'

const Gmail = ({ navigation }) => {

    // const[log, setLog]=useEffect(null)

    useEffect(()=>{
       
        GoogleSignin.configure({webClientId:'995534397594-t0i7vg10jko3gh9mfu1ee595uka708tb.apps.googleusercontent.com'});


    },[])

//    const signIn = async () => {
//         try {
//           await GoogleSignin.hasPlayServices();
//           const useInfo = await GoogleSignin.signIn();
//            setLog({useInfo})
//         } catch (error) {
//           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//           } else if (error.code === statusCodes.IN_PROGRESS) {
//             // operation (e.g. sign in) is in progress already
//           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             // play services not available or outdated
//           } else {
//             // some other error happened
//           }
//         }
//       };


const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    //   this.setState({ userInfo });
    navigation.navigate("infinite")
    
    console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{signIn()}}
            style={[styles.buttonContainer, styles.loginButton]} >

                <Text style={styles.loginText}>Gmail Login</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Gmail


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3659b8',
  },
  loginText: {
    color: 'white',
  },
});