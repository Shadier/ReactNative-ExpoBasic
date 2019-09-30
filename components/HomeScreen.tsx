import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'


export default class HomeScreen extends Component {
  navigateTo = () => {
    const { navigate } = this.props.navigation;
    navigate('Profile', {name: 'Jane'})
  }
  render() {
    return (
        <Button
        title="Go to Jane's profile"
        onPress={this.navigateTo}
      />
    )
  }
}
