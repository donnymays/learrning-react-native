import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors'

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  )
};

const styles = StyleSheet.create({
  
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: Colors.gentleBlue,
    padding: 20,
    marginVertical: 10,
    borderRadius: 5
  }
})

export default Card;