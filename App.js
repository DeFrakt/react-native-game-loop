/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}} >
        <View style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
          <Text style={styles.tileX}>X</Text>
        </View>
        <View style={[styles.tile, {borderTopWidth: 0}]}>
          <Text style={styles.tileO}>O</Text>
        </View>
        <View style={[styles.tile, {borderTopWidth: 0, borderRightWidth: 0}]} />
      </View>

      <View style={{flexDirection: "row"}} >
        <View style={[styles.tile, {borderLeftWidth: 0}]} />
        <View style={styles.tile} />
        <View style={[styles.tile, {borderRightWidth: 0}]} />
      </View>

      <View style={{flexDirection: "row"}} >
        <View style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]} />
        <View style={[styles.tile, {borderBottomWidth: 0}]} />
        <View style={[styles.tile, {borderBottomWidth: 0, borderRightWidth: 0}]} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tile:{
    borderWidth: 10,
    width: 100,
    height: 100
  },
  tileX:{
    color: "red",
    fontSize: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileO:{
    color: "green",
    fontSize: 60,
    flex: 1,
      alignItems: 'center',
    justifyContent: 'center'
  }


});

export default App;
