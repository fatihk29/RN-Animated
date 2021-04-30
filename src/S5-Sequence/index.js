import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      outputRange: ['#32CD32', '#C71585'],
    });
    const iconInterpolate = {
      backgroundColor: backgroundColorInterpolate,
      transform: [{scale: this.state.scaleAnimation}],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.icon, iconInterpolate]}>
            <Icon style={styles.text} size={25} name="music" />
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
  icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {},
});

AppRegistry.registerComponent('animations', () => animations);
