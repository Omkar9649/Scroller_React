import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignOut = ({navigation}) => {

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            // setState({ user: null }); 
            // Remember to remove the user from your app's state as well
            navigation.navigate("Splash")

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableOpacity onPress={() => {signOut()}} >

            <Text>logout</Text>

        </TouchableOpacity>
    )
}

export default SignOut