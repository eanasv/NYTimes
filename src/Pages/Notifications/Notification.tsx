import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

NotificationScreen.propTypes = {
    
};

function NotificationScreen(props) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Notification will populate here</Text>
        </View>
    );
}

export default NotificationScreen;