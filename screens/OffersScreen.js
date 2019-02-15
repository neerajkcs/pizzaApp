import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../components/StyledText';

export default class OffersScreen extends React.Component {
  static navigationOptions = {
    title: 'Offers',
    drawerIcon: ({tintColor}) => (
      <Ionicons name="ios-pricetags" size={18} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.headerContainer, {marginTop: Platform.OS === 'ios' ? 10 : 30}]}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="md-arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Offers</PatuaText></View>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
              <Image
                source={require('../assets/images/menu-icon.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentWrapper}>
              <View style={styles.mainContent}>
                <View style={styles.mainItem}>
                  <Image
                    source={require('../assets/images/unlimited.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Unlimited Combo Lunch</Text>
                  <Text style={styles.mainItemDesc}>Lunch Time: 11:30 am to 05:00 pm</Text>
                  <Text style={styles.mainItemPrice}>Rs. 159/-</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Stuffed Pizza</Text>
                      <Text style={styles.mainItemSizePrice}>One Type</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Types of Pizza</Text>
                      <Text style={styles.mainItemSizePrice}>Three Types</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Cheese Garlic Bread</Text>
                      <Text style={styles.mainItemSizePrice}>Two Types</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Variety</Text>
                      <Text style={styles.mainItemSizePrice}>Salad & Pasta</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Coke 200 ml</Text>
                      <Text style={styles.mainItemSizePrice}>Limited</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Brownie with Ice Cream</Text>
                      <Text style={styles.mainItemSizePrice}>Limited</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.mainItem}>   
                  <Image
                    source={require('../assets/images/unlimitedOne.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Unlimited Combo Dinner</Text>
                  <Text style={styles.mainItemDesc}>Dinner Time : 05:00 pm to 10:00 pm</Text>
                  <Text style={styles.mainItemPrice}>Rs. 179/-</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Stuffed Pizza</Text>
                      <Text style={styles.mainItemSizePrice}>One Type</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Types of Pizza</Text>
                      <Text style={styles.mainItemSizePrice}>Three Types</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Cheese Garlic Bread</Text>
                      <Text style={styles.mainItemSizePrice}>Two Types</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Variety</Text>
                      <Text style={styles.mainItemSizePrice}>Salad & Pasta</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Coke 200 ml</Text>
                      <Text style={styles.mainItemSizePrice}>Limited</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Brownie with Ice Cream</Text>
                      <Text style={styles.mainItemSizePrice}>Limited</Text>
                    </View>
                  </View>
                </View>                
                <View style={styles.mainItem}>
                  <Text style={styles.mainItemHeadTitle}>Kids Under 10 Years Rs. 120</Text>
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  mainItem: {
    borderColor: '#fff',
    borderWidth: 1,
    flex: 1,
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
    marginTop: 15
  },
  mainItemHeadTitle: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 8
  },
  mainItemDesc: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 5
  },
  mainItemPrice: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 24,
    color: '#CD1C1D',
    paddingBottom: 5
  },
  mainItemSizes: {
    marginTop: 10,
    backgroundColor: '#C71628',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 3
  },
  mainItemSize: {
    paddingVertical: 5,
    width: '33%'
  },
  mainItemSizeTitle: {
    color: '#fff',
    fontFamily: 'patua-one',
    textAlign: 'center'
  },
  mainItemSizePrice: {
    color: '#000',
    fontFamily: 'patua-one',
    textAlign: 'center'
  },
  horizontalBorders: {
    borderColor: '#fff',
    borderLeftWidth: 1,
    borderRightWidth: 1
  }
});
