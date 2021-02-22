import React, { useState } from 'react';
import {
    Button, StyleSheet, Text, View, Alert, Dimensions, TouchableOpacity,
    ScrollView
} from 'react-native';
import {
    useNavigation,
    useRoute,
    useFocusEffect,
} from '@react-navigation/native';
import { ButtonGroup } from 'react-native-elements';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';

export default () => {
    const navigation = useNavigation();
    const buttons = ['Hello', 'World', 'Buttons']
    const [selectedIndex, setSelectedIndex] = React.useState(2);

    return (
        <>
            <AppBar title="Test Page" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <ScrollView style={{ flex: 1 }}>
                <ButtonGroup
                    onPress={value => setSelectedIndex(value)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    selectedButtonStyle={{ backgroundColor: '#0F6FFF', }}
                    innerBorderStyle={{ color: '#0F6FFF' }}
                    containerStyle={{ height: 30, borderColor: '#0F6FFF' }}
                />
            </ScrollView>
        </>
    );
}

