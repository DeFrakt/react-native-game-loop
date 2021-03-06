/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View, Text, TouchableOpacity, Alert} from "react-native";
import { GameLoop } from "react-native-game-engine";
import App from './App';
import {name as appName} from './app.json';


export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1
    })
  }

  getWinner = () =>{
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;

    //check rows
    for(var i=0; i < NUM_TILES; i++){
      sum = arr[i][0]+ arr[i][1] + arr[i][2];
      if (sum == 3 ) { return  1; }
      else if (sum == -3) { return -1; }
    }

    //check cols
    for(var i=0; i < NUM_TILES; i++){
      sum = arr[0][i]+ arr[1][i] + arr[2][i];
      if (sum == 3 ) { return  1; }
      else if (sum == -3) { return -1; }
    }

      //checkDiagnols
      sum = arr[0][0]+ arr[1][1] + arr[2][2];
      if (sum == 3 ) { return  1; }
      else if (sum == -3) { return -1; }

      sum = arr[2][0]+ arr[1][1] + arr[0][2];
      if (sum == 3 ) { return  1; }
      else if (sum == -3) { return -1; }

      //no winners
      return 0;
  
  }

  onTilePress = (row, col) => {
    //dont allow title to change
    var value = this.state.gameState[row][col];
    if (value !== 0 ) {return;}

    var currentPlayer = this.state.currentPlayer;

    //set correct title
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    //switch to other player
    var nextPlayer = (currentPlayer == 1) ? -1 : 1; 
    this.setState({currentPlayer: nextPlayer});

    //check Winners
    var winner = this.getWinner();
    if(winner == 1){
      Alert.alert("Player One is the Winner!");
      this.initializeGame();
    } else if (winner == -1){
      Alert.alert("Player Two is the Winner!");
      this.initializeGame();
    }


  }

  renderXO = (row, col) =>{
    var value = this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Text style={styles.tileX}>X</Text>;
      case -1: return <Text style={styles.tileO}>O</Text>;
      case 0: return <View />;
    }

  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection: "row"}} >
        <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
          {this.renderXO(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.tile, {borderTopWidth: 0}]}>
          {this.renderXO(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.tile, {borderTopWidth: 0, borderRightWidth: 0}]}>
          {this.renderXO(0, 2)}
        </TouchableOpacity> 
      </View>

      <View style={{flexDirection: "row"}} >
        <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.tile, {borderLeftWidth: 0}]}>
          {this.renderXO(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={styles.tile}>
          {this.renderXO(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(1, 2)}style={[styles.tile, {borderRightWidth: 0}]}>
          {this.renderXO(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row"}} >
        <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
          {this.renderXO(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.tile, {borderBottomWidth: 0}]}>
          {this.renderXO(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.tile, {borderBottomWidth: 0, borderRightWidth: 0}]}>
          {this.renderXO(2, 2)}
        </TouchableOpacity>
      </View>
    </View>
    );
  }
} 

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
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  tileX:{
    color: "red",
    fontSize: 60,
  },
  tileO:{
    color: "green",
    fontSize: 60,
  }


});
AppRegistry.registerComponent(appName, () => HelloWorldApp);
