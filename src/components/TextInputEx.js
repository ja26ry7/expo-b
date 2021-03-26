
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TextInput, Image } from 'react-native';
import Icon from '../components/Icon';

const TextInputEx = () => {
    const [borderColors, setBorderColors] = React.useState('black')
    const [borderColors1, setBorderColors1] = React.useState('black')
    return (

        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 1.5,
                height: 40,
                borderRadius: 5,
                margin: 10,
                borderColor: borderColors,
            }}>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
                    }}
                    style={styles.imageStyle}
                />
                <TextInput
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter Your Name Here"
                    underlineColorAndroid="transparent"
                    textAlign='right'
                    onBlur={() => setBorderColors('black')}
                    onFocus={() => setBorderColors('orange')}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 1.5,
                height: 40,
                borderRadius: 5,
                margin: 10,
                borderColor: borderColors1,
            }}>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
                    }}
                    style={styles.imageStyle}
                />
                <TextInput
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter Your Mobile No Here"
                    underlineColorAndroid="transparent"
                    textAlign='right'
                    onBlur={() => setBorderColors1('black')}
                    onFocus={() => setBorderColors1('orange')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default TextInputEx;