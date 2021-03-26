import React from 'react';
import { View, Alert, Modal } from 'react-native';

import { AppContext } from '../AppContext';
import { AppBar } from './AppBar';
import { BackButton } from '../components/BackButton';
import { CTAButton } from '../components/CTAButton';


const ForcedUpdatePassword = () => {
    const appCtx = React.useContext(AppContext);

    const [newPassword, setNewPassword] = React.useState(null);
    const [checkPassword, setCheckPassword] = React.useState(null);

    const change_new_password_callback = (resData) => {
        Alert.alert(
            '更改密码成功', //提示标题
            null, //提示内容
            [
                {
                    text: '确定',
                    onPress: () => {
                        console.log('點擊確定');
                        appCtx.logout();
                        appCtx.setShowFUPassword(false);
                    },
                },
            ],
        );
    };

    return (
        <Modal visible={appCtx.showFUPassword} animationType="slide" >
            <AppBar
                title="修改密码"
                left={<BackButton onPress={() => {
                    appCtx.logout();
                    appCtx.setShowFUPassword(false);
                }} />}
            />

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TextInputEx
                    label="新密码"
                    placeholder="请输入新密码"
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                    secureTextEntry={true}
                    errorMessage="6-12位，英数混合且英文须含有大小写"
                    rule={() => {
                        if (newPassword === null) {
                            return true;
                        } else {
                            return !!newPassword.match(
                                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$/g,
                            );
                        }
                    }}
                />

                <TextInputEx
                    label="确认新密码"
                    placeholder="请确认新密码"
                    value={checkPassword}
                    onChangeText={(text) => setCheckPassword(text)}
                    secureTextEntry={true}
                    errorMessage="两次密码不一致"
                    rule={() => {
                        if (checkPassword === null) {
                            return true;
                        } else {
                            return checkPassword === newPassword;
                        }
                    }}
                />

                <View style={{ height: 50 }} />

                <CTAButton
                    title="送出"
                    onPress={() => {
                        if (newPassword === null || checkPassword === null) {
                            setNewPassword('');
                            setCheckPassword('');
                            return;
                        }

                        if (
                            !!newPassword.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$/g) &&
                            checkPassword === newPassword
                        ) {
                            appCtx
                                .changeNewPassword(checkPassword)
                                .then(change_new_password_callback);
                        } else {
                            Alert.alert(
                                '请确认输入资料',
                                null,
                                [
                                    {
                                        text: '确定',
                                        onPress: () => console.log('點擊確定'),
                                    },
                                ],
                            );
                        }
                    }}
                />
            </View>
        </Modal>
    );
};

export { ForcedUpdatePassword };
