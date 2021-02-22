import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppBar from '../components/AppBar';
import Icon from '../components/Icon';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { AppContext } from '../AppContext';
import ListGroup from '../components/ListGroup';


export default () => {
    const navigation = useNavigation();
    const appCtx = useContext(AppContext);

    return (
        <>
            <AppBar title="Setting" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.pop()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <View >
                <SectionHeader />
                <ListGroup
                    items={[
                        { label: '關於', onPress: () => navigation.navigate('introduction') },
                        { label: '系統資訊', onPress: () => navigation.navigate('systempage') }
                    ]}
                />

                <View style={{ height: 50 }} />
                <Button title='登出' bgColor='darkblue' onPress={() => appCtx.logout()}></Button>

            </View>
        </>
    );
}