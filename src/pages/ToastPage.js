import React, { useState } from 'react';
import {
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DateTimePicker } from 'react-native-ui-lib';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';
import Toast from 'react-native-root-toast';
import Button from '../components/Button';

export default () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    const componentDidMount = () => {
        setTimeout(() => setVisible(true), 2000); // show toast after 2s

        setTimeout(() => setVisible(false), 5000); // hide toast after 5s
    };

    return (
        <>
            <AppBar title="Toast" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <ScrollView style={{ padding: 14 }} >
                <Button title='Toast1' bgColor='darkblue' onPress={() => componentDidMount()} />
                <Button title='Toast2' bgColor='darkblue' onPress={() => componentDidMount()} />

                <Toast
                    visible={visible}
                    position={50}
                    shadow
                    animation
                    hideOnPress
                >This is toast</Toast>
            </ScrollView>
        </>
    );
}