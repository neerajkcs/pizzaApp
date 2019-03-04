import React from 'react';
import { FlatList, ActivityIndicator, Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../../components/StyledText';

export default class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Pizza',
    drawerLabel: () => null
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://kajuspizza.com/api/pizzaapi')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activeIndictor, {flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
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

                <FlatList
                  data={this.state.dataSource}
                  renderItem={({item}) => 
                    <View style={styles.mainItem}>
                      <Image
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.mainItemImage}
                      />
                      <Text style={styles.mainItemTitle}>{item.title}</Text>
                      <Text style={styles.mainItemDesc}>{item.body}</Text>
                      <View style={styles.mainItemSizes}>
                        <View style={styles.mainItemSize}>
                          <Text style={styles.mainItemSizeTitle}>Regular</Text>
                          <Text style={styles.mainItemSizePrice}>{item.Regular}</Text>
                        </View>
                        <View style={[styles.mainItemSize, styles.horizontalBorders]}>
                          <Text style={styles.mainItemSizeTitle}>Medium</Text>
                          <Text style={styles.mainItemSizePrice}>{item.Medium}</Text>
                        </View>
                        <View style={styles.mainItemSize}>
                          <Text style={styles.mainItemSizeTitle}>Large</Text>
                          <Text style={styles.mainItemSizePrice}>{item.Large}</Text>
                        </View>
                      </View>
                    </View>
                  }
                  keyExtractor={({id}, index) => id}
                />
                
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
    overflow: 'hidden',
    alignSelf: 'center'
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
  },
  activeIndictor: {
    backgroundColor: '#C71628'
  }
});