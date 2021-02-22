import React, { useContext, useState, useEffect } from 'react';
import {
  // SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { AppProvider, AppContext } from './AppContext';
import { unsignInPage, signInPage } from './routes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2894FF',
  },
};

const UnauthedPage = () => {
  const appCtx = useContext(AppContext);
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="signIn">
        {unsignInPage.map((item, index) => (<Stack.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
          options={{
            title: appCtx.appName,
            headerShown: false,
            animationEnabled: true,
          }}
        />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const AuthedPage = () => {
  const appCtx = useContext(AppContext);
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="mainpage">
        {signInPage.map((item, index) => (<Stack.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
          options={{
            title: appCtx.appName,
            headerShown: false,
            animationEnabled: true,
          }}
        />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const LaunchPage = () => {
  const appCtx = useContext(AppContext);
  console.log('initialized', appCtx.initialized, appCtx.uid)

  if (appCtx.initialized) {
    if (appCtx.uid === '') {
      return <UnauthedPage />;
    } else {
      return <AuthedPage />;
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{appCtx.appName}</Text>
      <View style={{ height: 50 }} />
      <ActivityIndicator />
    </View>
  );
};


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppProvider>
        {/* <StatusBar barStyle="dark-content" backgroundColor="whitesmoke" /> */}
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <LaunchPage />
        </KeyboardAvoidingView>
        {/* </SafeAreaView> */}
      </AppProvider>
    </PaperProvider>
  );
}

export default App;