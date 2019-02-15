import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../../components/StyledText';

export default class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Pizza',
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
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Pizza</PatuaText></View>
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
                <PatuaText style={styles.contentText}>Pizza is a celebration in itself. Bearing an Italian origin, it is a savory round dish made by flattening wheat based dough and topping it with ingredients of choice such as cheese, capsicum tomatoes etc. and served straight out from the oven. </PatuaText>
              </View>
              <View style={styles.mainContent}>
                <View style={styles.mainItem}>
                  <Text style={styles.mainViewTitle}>CLASSIC PIZZA</Text>
                </View>
                
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

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/SpicyVeg.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Spicy Veg</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Onion, Green Chilly, Tomato</Text>
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
                  <Text style={styles.mainViewTitle}>SUPREME PIZZA</Text>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/VegBite.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Veg Bite</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Onion, Capsicum, Tomato</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>120/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>160/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>280/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/MushroomChilly.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Mushroom Chilly</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Green Chilly, Garlic, Mushroom</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>130/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>170/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>290/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/MexicanCashew.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Mexican Cashew</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Green Chilly, Sweet Corn, Black Olives, Tomato</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>130/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>180/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>300/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/VegJalfry.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Veg Jalfry</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Capsicum, Onion, Baby Corn, Jalapeno</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>140/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>190/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>300/-</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.mainItem}>
                  <Text style={styles.mainViewTitle}>INDIAN PIZZA</Text>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/TikkaMasala.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Tikka Masala</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Onion, Green Chilly, Garlic, Spinach</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>140/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>210/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>300/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/BBQ.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>BBQ</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Onion, Capsicum, Tomato, BBQ Paneer</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>150/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>220/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>310/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/KajusSpecial.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Kaju's Special</Text>
                  <Text style={styles.mainItemDesc}>Cheese, Onion, Capsicum, Mushroom, Tomato, Sweet Corn, White Paneer</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>170/-</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>240/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>360/-</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.mainItem}>
                  <Image
                    source={require('../../assets/images/products/ThreeCheesePizza.jpg')}
                    resizeMode="cover"
                    style={styles.mainItemImage}
                  />
                  <Text style={styles.mainItemTitle}>Three Cheese Pizza</Text>
                  <Text style={styles.mainItemDesc}>Three Types of Cheese, Capsicum, Sweet Corn, Jalapeno</Text>
                  <View style={styles.mainItemSizes}>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Regular</Text>
                      <Text style={styles.mainItemSizePrice}>N/A</Text>
                    </View>
                    <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                      <Text style={styles.mainItemSizeTitle}>Medium</Text>
                      <Text style={styles.mainItemSizePrice}>280/-</Text>
                    </View>
                    <View style={styles.mainItemSize}>
                      <Text style={styles.mainItemSizeTitle}>Large</Text>
                      <Text style={styles.mainItemSizePrice}>N/A/</Text>
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
  mainViewTitle: {
    fontFamily: 'patua-one',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5
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