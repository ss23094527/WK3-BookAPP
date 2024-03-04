import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking, Pressable } from 'react-native';

const AccountScreen = ({ route }) => {
  
  return (
    <View style={styles.container}>
        <Text>My account</Text>
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

export default AccountScreen;