import React from 'react';
import PropTypes from 'prop-types';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Home from '../Pages/Home/Home';
import DetailsScreen from '../Pages/DetailsScreen/DetailsScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer