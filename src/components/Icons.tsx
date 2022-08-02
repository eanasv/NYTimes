import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';



interface IconParams{
    iconName:string;
    size?:any;
    color?:string
};

function Icons(IconParams) {
    return (
        <Icon name={IconParams.iconName} size={IconParams.size} color={IconParams.color} />
    );
}

export default Icons;