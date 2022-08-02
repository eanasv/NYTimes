/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import { ScrollView,SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './src/Pages/Home/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './src/Pages/DetailsScreen/DetailsScreen';
//import MyDrawer from './src/components/MyDrawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import NotificationScreen from './src/Pages/Notifications/Notification';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E697A2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} options={{
          title: 'NY Times Most Popular',}}/>
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

const Section = ({children, title}) => {
  //const isDarkMode = useColorScheme() === 'dark';
  return (
    <View >
      <Text
        >
        {title}
      </Text>
      <Text
        >
        {children}
      </Text>
    </View>
  );
};

const App=  () => {
  //const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={styles.container}>
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#E697A2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={MyDrawer} options={{
          title: 'NY Times Most Popular', headerShown:false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {/* <MyDrawer /> */}
    </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      {/* <Home/> */}
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //padding:30,
   // alignItems: 'center',
    // justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});



export default App;
