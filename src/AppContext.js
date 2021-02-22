import React, { createContext, useState, useEffect } from 'react';
import { AppState, Platform } from 'react-native';
import axios from 'axios';

const AppContext = React.createContext({
    appName: '',
    appVersion: '',
    uid: '123',
    nickname: '',
    profileImg: '',
    initialized: true
});

const AppProvider = ({ children }) => {
    const [appName, setAppName] = useState('Joy\'s expo');
    const [appVersion, setAppVersion] = useState('1.0.0');
    const [initialized, setInitialized] = useState(true);
    const [loading, setLoading] = useState(false);

    const [uid, setUid] = useState('');
    const [nickname, setNickname] = useState('');
    const [profileImg, setProfileImg] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    /////////////////////////////////////////////////////

    // useEffect(() => {
    //     axios.defaults.baseURL = SERVER_URL;
    //     axios.defaults.headers.common['Content-Type'] = 'application/json';
    //     axios.defaults.headers.common['Authorization'] = 'test_token';

    //     AppState.addEventListener('change', handleAppStateChange);

    //     return () => {
    //         AppState.removeEventListener('change', handleAppStateChange);
    //     };
    // }, []);

    /////////////////////////////////////////////////////

    // const handleAppStateChange = (nextAppState) => {
    //     console.log(nextAppState);
    // };

    /////////////////////////////////////////////////////

    // const fetchApi = async (method, url, params) => {
    //     let data = null;

    //     try {
    //         const response = await axios({ method, url, data: params });

    //         // if (response.data.errorCode !== 0) {
    //         //   throw new Error(response.data.errorMessage);
    //         // }

    //         data = response.data;
    //     } catch (error) {
    //         alert(error.message);
    //     }

    //     return data;
    // };

    /////////////////////////////////////////////////////

    const login = (account, password) => {
        setUid('Joy');
        console.log(account, password)
    };

    const logout = () => {
        setUid('');
    };

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    return (
        <AppContext.Provider
            value={{
                appName,
                appVersion,
                initialized,
                loading,

                uid,
                nickname,
                profileImg,

                // fetchApi,

                login,
                logout,

                // setModal: (modal) => setModal(modal),
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
