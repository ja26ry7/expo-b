import React, { useCallback, useMemo, useRef } from 'react';
import {
    TouchableOpacity,
    ScrollView, View, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';
import Button from '../components/Button';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';



export default () => {
    const navigation = useNavigation();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (

        <BottomSheetModalProvider>
            <AppBar title="ActionSheet" left={
                <TouchableOpacity style={{ marginRight: 20 }}
                    onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" style={{}} />
                </TouchableOpacity>} right={{}} barColor='' />
            <ScrollView style={{ padding: 14 }} >
                <Button title='BottomSheet' bgColor='darkblue' onPress={handlePresentModalPress} />

                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                        <Text>Awesome 🎉</Text>
                    </View>
                </BottomSheetModal>
            </ScrollView>
        </BottomSheetModalProvider>

    );
}