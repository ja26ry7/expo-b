import React from 'react';
import { View, Text } from 'react-native';

const SectionHeader = ({ title }) => {
    return (
        <View
            style={{
                backgroundColor: 'whitesmoke',
                paddingHorizontal: 20,
                paddingVertical: 5,
            }}
        >
            <Text>{title}</Text>
        </View>
    );
};

export default SectionHeader;
