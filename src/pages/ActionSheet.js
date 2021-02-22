import React, { useCallback, useMemo, useRef } from 'react';
import {
    TouchableOpacity,
    ScrollView, View, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';
import BottomSheet from 'react-native-bottomsheet';
import Button from '../components/Button';


export default () => {
    const navigation = useNavigation();

    return (
        <>
            <AppBar title="ActionSheet" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <ScrollView style={{ padding: 14 }} >
                <Button title='ActionSheet' bgColor='darkblue' onPress={() => {
                    BottomSheet.showBottomSheetWithOptions({
                        options: ['Option 1', 'Option 2', 'Option 3', '取消'],
                        title: 'Demo Bottom Sheet',
                        dark: true,
                        cancelButtonIndex: 3,
                    }, (value) => {
                        if (value < 3) alert(value)
                    });
                }} />
                <Button
                    title='ShareBottomSheet' bgColor='darkblue' onPress={() => {
                        BottomSheet.showShareBottomSheetWithOptions({
                            url: 'https://google.com',
                            subject: 'Share',
                            message: 'Simple share',
                        }, (value) => {
                            alert(value);
                        },
                            (resultcode, path) => {
                                alert(resultcode);
                                alert(path);
                            }
                        )
                    }}
                />
            </ScrollView>
        </>
    );
}