import React from 'react';
import {
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DateTimePicker, } from 'react-native-ui-lib';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';

export default () => {
    const navigation = useNavigation();
    return (
        <>
            <AppBar title="日期與時間" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <ScrollView style={{ padding: 14 }} >
                <DateTimePicker
                    containerStyle={{ marginVertical: 20 }}
                    title={'Date'}
                    placeholder={'Select a date'}
                    dateFormat={'YYYY/MM/DD'}
                    value={new Date()}
                />
                <DateTimePicker
                    mode={'time'}
                    title={'Time'}
                    placeholder={'Select time'}
                    timeFormat={'h:mm A'}
                    value={new Date()}
                />
            </ScrollView>
        </>
    );
}