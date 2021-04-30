import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class animations extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  };
  onPress = () => {
    Animated.sequence([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(199, 71, 255)'],
    });
    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [{scale: this.state.scaleAnimation}],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.box, boxStyle]}>
            <Animated.Text style={styles.text}>AAAAAAAAAAAAAA</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    fontSize: 12,
  },
  text: {},
});

AppRegistry.registerComponent('animations', () => animations);
