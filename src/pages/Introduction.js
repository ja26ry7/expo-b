import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';

export default () => {
    const navigation = useNavigation();

    return (
        <>
            <AppBar title="自我介紹" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Hello World!</Text>
            </View>

        </>
    )
}