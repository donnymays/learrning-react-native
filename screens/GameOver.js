import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Card>
        <View>
          <Text style={styles.statsContainerHeader}>The Game is Over</Text>
          <Text style={styles.statsContainer}>Number of Rounds: {props.roundsNumber}</Text>
          <Text style={styles.statsContainer}>The Number was: {props.userNumber}</Text>
          <Button title='New Game' onPress={props.onRestart} color={Colors.titleYellow}></Button>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    color: Colors.titleYellow,
    backgroundColor: Colors.headerOrange
  },
  statsContainerHeader: {
    color: Colors.backgroundBlue,
    fontSize: 36
  },
  statsContainer: {
    color: Colors.seaFoam,
    fontSize: 22,
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameOver;