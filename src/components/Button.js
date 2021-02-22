import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ title, onPress, bgColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bgColor,
                marginHorizontal: 60,
                marginVertical: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
            }}
        >
            <Text style={{ fontSize: 16, color: 'white' }}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button;