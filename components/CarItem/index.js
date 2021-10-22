//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import StyledButton from '../StyledButton/index';

// create a component
const CarItem = ( props ) => {

  const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>

        <ImageBackground source={image}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA} >{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={() => {
              console.warn('hey');
            }} 
          />
          <StyledButton 
            type="secondary"
            content={"Existing Inventory"} 
            onPress={() => {
              console.warn('there');
            }} 
          />
        </View>
      </View>
  
    );
};

//make this component available to the app
export default CarItem;
