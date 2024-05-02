import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import HorizontalScrollList from './flatList';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  circle: {
    marginBottom: 10,
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <HorizontalScrollList />
      </View>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}
