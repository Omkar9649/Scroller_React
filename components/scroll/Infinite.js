import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native'

import axios from 'axios';
import React, { useEffect, useState } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';



const Infinite = ({ navigation }) => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        setIsLoading(true);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                //setUsers(res.data.results);
                setUsers([...users, ...res.data.results]);
                setIsLoading(false);
            });
    };



    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
                <View style={styles.contentWrapperStyle}>
                    <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                    <Text style={styles.txtEmailStyle}>{item.email}</Text>
                </View>
            </View>
        );
    };

    const renderLoader = () => {
        return (
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        getUsers();
    }, [currentPage]);
    
    //signout
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            // setState({ user: null }); 
            // Remember to remove the user from your app's state as well
            navigation.navigate("dashoard")

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Infinite Scroll</Text>

            </View>

            <StatusBar backgroundColor="#000" />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.email}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
            />
            <View style={styles.bottomContainer}>
            <TouchableOpacity  style={ styles.logoutButton} onPress={()=>signOut()}>
            <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
            </View>
        </>


    )
}

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginTop: 5
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777",
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
    headerContainer: {
        flexDirection: 'row',
        height: 60,
        elevation: 5,
        justifyContent: 'center',

        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerTxt: {
        margin: 5,
        marginLeft: 2,
        fontWeight: '500',
        fontSize: 20,


    },
    bottomContainer: {
        flexDirection: 'row',
        height: 60,
        elevation: 5,
        bottom:0,
        justifyContent: 'center',

        alignItems: 'center',
        backgroundColor: 'white'
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
      logoutButton: {
        backgroundColor: '#3659b8',
        margin:5,
        borderRadius:5
        
      },
      logoutText: {
        color: 'white',
        fontSize:20,
        margin:5,
        

      },
});


export default Infinite