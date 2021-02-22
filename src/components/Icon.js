import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Feather,
    FontAwesome,
    Ionicons,
    SimpleLineIcons,
} from '@expo/vector-icons';

const Icon = ({ name, size, color, style }) => {
    let IconComponent = null
    const IconName = name.split('/')

    switch (IconName[0]) {
        case 'Feather':
            IconComponent = Feather;
            break;
        case 'FontAwesome':
            IconComponent = FontAwesome;
            break;
        case 'Ionicons':
            IconComponent = Ionicons;
            break;
        case 'SimpleLineIcons':
            IconComponent = SimpleLineIcons;
            break;
        default:
            IconComponenet = FontAwesome;

    }

    return (
        <IconComponent
            name={IconName[1]}
            size={size}
            color={color}
            style={style}
        />
    )
}

export default Icon;