import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PatuaText } from '../components/StyledText';

export default class OffersScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
    drawerIcon: ({tintColor}) => (
      <Ionicons name="ios-pricetags" size={18} color={tintColor} />
    )
  };

  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      message:''
    }
  }

  updateValue(text,field){
    this.setState({[field]:text});
  }
  submit (){
    let collection={}
    collection.name=this.state.name,
    collection.email=this.state.email,
    collection.message=this.state.message
    console.warn(collection);

    var url = 'http://www.kajuspizza.com/kajusdev/api/submission';

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.headerContainer, {marginTop: Platform.OS === 'ios' ? 10 : 30}]}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="md-arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.pageTitle}><PatuaText style={styles.pageTitleText}>Contact</PatuaText></View>
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
                <TextInput
                  placeholder="Name"
                  style={styles.input}
                  onChangeText={(text)=>this.updateValue(text, 'name')}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={(text)=>this.updateValue(text, 'email')}
                />
                <TextInput
                  placeholder="Message"
                  multiline = {true}
                  numberOfLines = {4}
                  style={styles.inputMultiline}
                  onChangeText={(text)=>this.updateValue(text, 'message')}
                />
                <TouchableOpacity style={styles.btn} onPress={()=>this.submit()}>
                  <Text>Submit</Text>
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
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  inputMultiline: {
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  btn: {
    height: 40,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
