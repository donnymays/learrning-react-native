import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 55,
    backgroundColor: Colors.headerOrange,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  headerTitle: {
    color: Colors.gentleBlue,
    fontSize: 18
  }

});

export default Header;