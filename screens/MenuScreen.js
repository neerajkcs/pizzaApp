import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../components/StyledText';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
    drawerIcon: ({tintColor}) => (
      <Ionicons name="ios-pizza" size={18} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.headerContainer, {marginTop: Platform.OS === 'ios' ? 10 : 30}]}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="md-arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Menu</PatuaText></View>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
              <Image
                source={require('../assets/images/menu-icon.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.contentWrapper}>
              <View style={styles.contentHeader}>
                <PatuaText style={styles.contentText}>Choose to your liking</PatuaText>
              </View>
              <View style={styles.mainContent}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pizza')} style={styles.menuItem}>
                  <Image
                    source={require('../assets/images/pizza-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Pizza</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pasta')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/pasta-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Pasta</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Garlic')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/garlicbread-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Garlic Bread</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sandwich')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/sandwich-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Sandwich</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Snacks')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/snacks-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Snacks</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Combos')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/combo-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Combos</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Beverages')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/beverages-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Beverages</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Desserts')} style={styles.menuItem}>
                <Image
                    source={require('../assets/images/desserts-cat.jpg')}
                    resizeMode="cover"
                    style={styles.menuItemImage}
                  />
                  <View style={styles.menuItemOverlay}><Text style={styles.menuItemText}>Desserts</Text></View>
                </TouchableOpacity>
              </View>
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
  contentContainer: {
    paddingTop: 30,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageTitleText: {
    color: '#fff',
    fontSize: 20
  },
  contentWrapper: {
    padding: 16,
  },
  contentHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    color: 'white',
    textAlign: 'center'
  },
  mainContent: {
    paddingVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  menuItem: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 150,
    height: 100,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden'
  },
  menuItemImage: {
    width: 148,
    height: 98,
    position: 'absolute'
  },
  menuItemOverlay: {
    width: 148,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  menuItemText: {
    color: '#fff',
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 20
  }
});