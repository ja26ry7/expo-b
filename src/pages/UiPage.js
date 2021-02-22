import React, { useState } from 'react';
import {
    Button, StyleSheet, Text, View, Alert, Dimensions, TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DateTimePicker, Picker } from 'react-native-ui-lib';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Provider as PaperProvider } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import AppBar from '../components/AppBar';
import Icon from '../components/Icon';
import ACard from '../components/ACard';
import SectionHeader from '../components/SectionHeader';
import ListGroup from '../components/ListGroup';

export default () => {
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    return (
        <PaperProvider>
            <AppBar title="Uipage" left={
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()} >
                    <Icon name="FontAwesome/angle-left" size={30} color="white" />
                </TouchableOpacity>} />
            <TabView
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={SceneMap({
                    first: () => <UiTab1 />,
                    second: () => <UiTab2 />,
                })}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        activeColor="#E800E8"
                        inactiveColor="#A1A1A1"
                        indicatorStyle={{ backgroundColor: '#E800E8', height: 3 }}
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                )}
            />
        </PaperProvider>
    );
}

const UiTab1 = () => {
    const [searchText, setSearchText] = React.useState('')
    const [searchText1, setSearchText1] = React.useState('')
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1 }}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(value) => setSearchText(value)}
                value={searchText}
                lightTheme
            />
            <Searchbar
                placeholder="Search"
                onChangeText={(value) => setSearchText1(value)}
                value={searchText1}
            />
            {/* <SectionHeader title='one' /> */}

            <ListGroup
                header='one'
                items={[
                    { key: 'introduction', label: '關於', onPress: () => navigation.navigate('introduction') },
                    { key: 'dateandtime', label: '日期與時間', onPress: () => navigation.navigate('dateandtime') }
                ]}
            />
            <ListGroup
                header='two'
                items={[
                    { key: 'actionsheet', label: 'ActionSheet', onPress: () => navigation.navigate('actionsheet') },
                    { key: 'bottomsheet', label: 'BottomSheet', onPress: () => navigation.navigate('bottomsheet') }
                ]}
            />
            <ListGroup
                header='three'
                items={[
                    { key: 'draggableflatList', label: '可滑動清單', onPress: () => navigation.navigate('draggableflatList') },
                ]}
            />
            <ListGroup
                header='four'
                items={[
                    { key: 'toast', label: 'Toast', onPress: () => navigation.navigate('toast') },
                    { key: 'toast2', label: 'Toast2', onPress: () => { } },
                ]}
            />


        </ScrollView>
    );
}

const UiTab2 = () => (
    <ScrollView style={{ padding: 14 }} >
        <ACard height={200} text="Happy New Year!" />
        <ACard text="新年快樂！" />
    </ScrollView>
);


