import React from 'react';
import PropTypes from 'prop-types';
import { View,StyleSheet } from 'react-native';

Circle.propTypes = {
    
};

function Circle({size}) {
    return (
        <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: (size * 5) / 100,
            backgroundColor: "#F16894",
          },
        ]}
      />
    );
}

export default Circle;

const styles= StyleSheet.create({

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#F16894",
    backgroundColor: "#F16894",
  },
})