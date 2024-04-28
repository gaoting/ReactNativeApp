import * as React from 'react';
import {Text, TextInput, View, ScrollView, Image, StyleSheet} from 'react-native';
import HorizontalScrollList from './flatList';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 22
  }
})

export default function Home() {
  return (
    <View style={styles.container}>
      <HorizontalScrollList />
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 80}}>React Native</Text>
      </ScrollView>
    </View>
  );
}
