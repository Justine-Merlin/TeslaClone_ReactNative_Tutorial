//import liraries
import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

// create a component
const StyledButton = ( { type, content, onPress }) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

//make this component available to the app
export default StyledButton;
