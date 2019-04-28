import React from 'react';
import {Stylesheet, TextInput, View} from 'react-native';

export default class SearchInput extends React.Component {
    render() {
        return (
            <View style ={Stylesheet.container}>
            <TextInput
            autoCorrect={false}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            style={Stylesheet.textInput}
            clearButtonMode="always"
            />
            </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#657',
        marginHorizontal: 40,
        paddingHorizontal:10,
        borderRadius: 7,
    },
    textInput: {
        flex:1,
        color: 'white',
    }
})