import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../../components/StyledText';

export default class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Combos',
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
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Combos</PatuaText></View>
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
                <PatuaText style={styles.contentText}>Combos are a way to a full filling treat of every variety at Kaju’s Pizza. We have Combos for Six, Four & Two persons</PatuaText>
              </View>
              <View style={styles.mainContent}>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/ComboForSix.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Combo For Six</Text>
                  <Text style={styles.mainItemDesc}>(Supreme Garlic Bread Cheese -2, Large Classic Pizza-2, Salad Bowl-, 6-Soft Drink, Brownie-6
Slice) (Choice of Supreme Pizza-80/India Pizza-90)</Text>
                  <Text style={styles.mainItemSizePrice}>949.00/-</Text>
                </View>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/ComboForFour.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Combo for Four</Text>
                  <Text style={styles.mainItemDesc}>(Supreme Garlic Bread Cheese-1, Medium Classic Pizza-2, Salad Bowl-1, 4-Soft Drink, Brownie-4 slice)(Choice of Supreme Pizza-60/India Pizza-70)</Text>
                  <Text style={styles.mainItemSizePrice}>599.00/-</Text>
                </View>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/ComboForTwo.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Combo for Two</Text>
                  <Text style={styles.mainItemDesc}>(Garlic Bread Cheese-1, Medium Classic Pizza-1, 2-Soft drink, Brownie-2 Slice)(Choice of Supreme Pizza-40/India Pizza-50)</Text>
                  <Text style={styles.mainItemSizePrice}>269.00/-</Text>
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