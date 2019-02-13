import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../../components/StyledText';

export default class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Pasta',
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
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Pasta</PatuaText></View>
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
                <PatuaText style={styles.contentText}>Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature, traditionally in a wood-fired oven.</PatuaText>
              </View>
              <View style={styles.mainContent}>
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/Margherita.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Margherita</Text>
                  <Text style={styles.mainItemDesc}>Lots of Cheese</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>90/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>150/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>250/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/American-Margherita.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>American Margherita</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Tomato, Sweet Corn</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>100/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>160/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>270/-</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/Simply-Veg-Pizza.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Simply Veg</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Tomato, Onion</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>100/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>160/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>270/-</Text>
                    </View>
                  </View>
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
    fontSize: 14
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
    color: '#fff',
    fontFamily: 'patua-one',
    textAlign: 'center'
  },
  horizontalBorders: {
    borderColor: '#fff',
    borderLeftWidth: 1,
    borderRightWidth: 1
  }
});