import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import PropTypes from 'prop-types';
import {Linking} from 'react-native';

DetailsScreen.propTypes = {};

function DetailsScreen(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details will display here</Text>
    </View>
  );
}

export default DetailsScreen;
