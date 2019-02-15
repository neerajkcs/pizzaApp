import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../../components/StyledText';

export default class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Snacks',
    drawerLabel: () => null
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.headerContainer, {marginTop: Platform.OS === 'ios' ? 10 : 30}]}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')}>
              <Ionicons name="md-arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Snacks</PatuaText></View>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
              <Image
                source={require('../../assets/images/menu-icon.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.contentWrapper}>
              <View style={styles.contentHeader}>
                <PatuaText style={styles.contentText}>Snacks include fresh vegetable salads, French fries and an assortment of Veg & Paneer frankies</PatuaText>
              </View>
              <View style={styles.mainContent}>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/Salad.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Salad Bowl</Text>
                  <Text style={styles.mainItemSizePrice}>90.00/-</Text>
                </View>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/franchFries.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>French Fries</Text>
                  <Text style={styles.mainItemSizePrice}>70.00/-</Text>
                </View>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/PaneerFrankie.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Paneer Frankie</Text>
                  <Text style={styles.mainItemSizePrice}>60.00/-</Text>
                </View>
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/VegPaneerFrankie.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Veg paneer Frankie</Text>
                  <Text style={styles.mainItemSizePrice}>70.00/-</Text>
                </View>
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/VegFrankie.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Veg Frankie</Text>
                  <Text style={styles.mainItemSizePrice}>50.00/-</Text>
                </View>
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
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  mainItem: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 280,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  mainItemImage: {
    height: 150,
    width: '100%'
  },
  mainItemTitle: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5
  },
  mainItemDesc: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5
  },
  mainItemSizes: {
    marginTop: 10,
    backgroundColor: '#C71628',
    flexDirection: 'row',

  },
  mainItemSize: {
    flex: 1,
    paddingVertical: 5
  },
  mainItemSizeTitle: {
    color: '#fff',
    fontFamily: 'patua-one',
    textAlign: 'center'
  },
  mainItemSizePrice: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 20,
    color: '#C71628',
    marginBottom: 8
  },
  horizontalBorders: {
    borderColor: '#fff',
    borderLeftWidth: 1,
    borderRightWidth: 1
  }
});