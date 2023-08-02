import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("dash")


  //   }, 3000)

  //   console.log("hhh")
  // }, [])

  const start=()=>{
    navigation.navigate("dashoard")

  }



  return (

    <View style={styles.container}>
      <Text style={styles.logo}>Infinity Scroller</Text>

      <View style={styles.startContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => start()}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    fontSize: 25,
    fontWeight: "900",
    color: "red"

  },
  startContainer:{

    marginTop:10
  },
  startButton:{
    backgroundColor:'red',
    borderRadius:5

  },
  startText:{
    margin:5,
    fontWeight:'500',
    color:'white'
  }






})