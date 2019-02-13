import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import OffersScreen from './screens/OffersScreen';
import PizzaScreen from './screens/menu_items/PizzaScreen';
import PastaScreen from './screens/menu_items/PastaScreen';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppDrawerNavigator/>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        'patua-one': require('./assets/fonts/PatuaOne-Regular.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
const CustomDrawerComponent =(props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./assets/images/pizza-logo.png')} style={{width: 180, height: 120}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />

      <View style={styles.menuItem}>
        <Ionicons name="ios-mail" size={18} style={styles.menuItemIcon} /><Text style={styles.menuItemText}>info@abcd.com</Text>
      </View>
      <View style={styles.menuItem}>
        <Ionicons name="ios-call" size={18} style={styles.menuItemIcon} /><Text style={styles.menuItemText}>000-000-0000</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Menu: {
    screen: MenuScreen,
  },
  Offers: {
    screen: OffersScreen,
  },
  Pizza: {
    screen: PizzaScreen,
  },
  Pasta: {
    screen: PastaScreen,
  }
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    labelStyle:{fontFamily: 'patua-one', fontSize: 16, marginLeft: 0},
    activeTintColor:'#C71628',
    activeBackgroundColor:'rgba(0, 0, 0, .04)',
    inactiveTintColor:'rgba(0, 0, 0, 1)',
    inactiveBackgroundColor:'transparent'
  },
  drawerBackgroundColor: 'rgba(255, 255, 255, 0.85)',
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 15
  },
  menuItemIcon: {
    fontSize: 19,
    marginHorizontal: 16,
    color:'rgba(0, 0, 0, 0.65)'
  },
  menuItemText: {
    fontFamily: 'patua-one',
    fontSize: 16,
    marginHorizontal: 2
  }
});
