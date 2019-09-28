import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const artist = {
  name: 'Luis Alberto Spinneta',
  image: 'https://images.emojiterra.com/google/android-oreo/512px/2764.png',
}

export default class Componenteuno extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: artist.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.nombre}>{artist.name}</Text>
          <Text style={styles.corazon}>Icono corazon</Text>
        </View>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: { backgroundColor: 'rgb(2,2,2)', textAlign: "center", alignItems: "center" },
  image: { width : 100 , height: 100},
  info: { color: 'yellow'},
  nombre: { color: 'red' },
  corazon: { color: 'white' },
})