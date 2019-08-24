/**
 * @format
 */
import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { GameLoop } from "react-native-game-engine";
import App from './App';
import {name as appName} from './app.json';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

 
export default class BestGameEver extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: WIDTH / 8,
      y: HEIGHT / 8
    };
  }
 
  updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(y => y.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };
 
  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>
 
        <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />
    
 
      </GameLoop>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  player: {
    position: "relative",
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 2
  }
  
});
AppRegistry.registerComponent(appName, () => App);
