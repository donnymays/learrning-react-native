import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert  } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Inavlid number!', 
        'Input must be a two digit number.', 
          [{text: 'Okay', 
          style: 'destructive', 
          onPress: resetInputHandler 
          }]
        );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue))
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOuput;

  if (confirmed) {
    confirmedOuput = 
    <Card style={styles.summaryContainer}>
      <Text>You Selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)} color={ Colors.seaFoam } />
    </Card>
  } 

  
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.startPrompt}>Select a Number</Text>
            </View>
            <Input 
            style={styles.input}
            blurOnSubmit
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View><Button style='button' title='Reset' onPress={resetInputHandler} color={Colors.titleYellow} /></View>
              <View><Button style='button' title='Confirm' onPress={confirmInputHandler} color='#83BCA9' /></View>
            </View>
          </View>
        </Card>
        {confirmedOuput}
      </View>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlue
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    color: Colors.titleYellow,
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },

  button: {
    width: 20
  },

  input: {
    width: 150
  },

  startPrompt: {
    color: Colors.backgroundBlue
  },
  
  summaryContainer: {
    alignItems: "center"
  }
});

export default StartGameScreen;