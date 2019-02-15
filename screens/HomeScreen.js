import React from 'react';
import {
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PatuaText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    drawerIcon: ({tintColor}) => (
      <Ionicons name="ios-home" size={18} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={[styles.headerContainer, {marginTop: Platform.OS === 'ios' ? 10 : 30}]}>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
              <Image
                source={require('../assets/images/menu-icon.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/pizza-logo.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <PatuaText style={styles.welcomeTitle}>Welcome to Kaju's Pizza</PatuaText>

            <PatuaText style={styles.welcomeText}>
              Fall in love with this specially designed Pizza paradise. Try out our different types of piping hot & flavorful pizzas. We also have a variety of sandwiches, salads and desserts to suit your choice and at affordable prices.
            </PatuaText>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Offers')} style={styles.homeButton}>
              <PatuaText style={styles.homeButtonText}>Checkout Our Offers</PatuaText>
            </TouchableOpacity>
          </View>

        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C71628',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'flex-end'
  },
  welcomeTitle: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22
  },
  homeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
    backgroundColor: '#fffa9c',
    marginTop: 20
  },
  homeButtonText: {
    color: '#000',
    fontSize: 18
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
