import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking, Pressable } from 'react-native';

const WishlistScreen = ({ route }) => {
  
  return (
    <View style={styles.container}>
        <Text>Wish list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WishlistScreen;