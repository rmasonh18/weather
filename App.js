import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { Platform } from 'expo-core';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    //const style = {color:'red'}; //add style to component
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style ={[styles.largeText, styles.textStyle]}>
        Columbia, SC</Text>
        <Text style = {[styles.smallText, styles.textStyle]}>
        clear
        </Text>
        <Text style = {[styles.largeText, styles.textStyle]}>
        82
        </Text>
        <SearchInput placeholder ="Search any city"/>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 
    Platform.OS === 'ios' ? 'AvenirNext-Regular': 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
