import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { authorize } from 'react-native-app-auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';







const AuthConfig = {
  appId: "20b51231-71bc-4024-9b23-535f4e970336",
  tenantId: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
  appScopes: [
    'openid',
    'offline_access',
    'profile',
    'User.Read',
  ],
};

{/*ms office integration */}
const config = {
  warmAndPrefetchChrome: true,
  clientId: AuthConfig.appId,
  redirectUrl: Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'mlogin://react-native-auth',
  scopes: AuthConfig.appScopes,
  additionalParameters: { prompt: 'select_account' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/token',
  },
};


//googlesiging

// // const [userdata, setUserDAta] = useState(null)
// useEffect(() => {
//   GoogleSignin.configure();

// }, [])


// const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({ userInfo });Ata({ userInfo })
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (f.e. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };
const DAshboad = ({ navigation }) => {


  const [result, setResult] = useState({});

  loginWithOffice365 = async () => {
    let tempResult = await authorize(config);
    console.log(tempResult);
    setResult(tempResult);
  };
  return (
    <>
      {/* ms 365 login */}
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => loginWithOffice365()}>
          <Text style={styles.loginText}>Login with Office365</Text>
        </TouchableHighlight>
        <Text>{result.accessToken ? "Logged In" : "or"}</Text>

        {/* gmail login */}
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => navigation.navigate("gmail")}
        >
          <Text style={styles.loginText}>Login with google</Text>
        </TouchableHighlight>

      </View>

    </>
  )
}


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

export default DAshboad