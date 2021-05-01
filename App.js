import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'; //FontAwesome Icon: FAIcon

export default class animations extends Component {
  state = {
    colorAnimation: new Animated.Value(0), // color animasyonun baslangic degeri
    scaleAnimation: new Animated.Value(1), // scale animasyonun baslangic degeri
  };
  onPress = () => {
    Animated.sequence([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1, // colorAnimation degeri 500ms icinde 1 olacak.
        duration: 500, // 500ms
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(2500), // 2500 ms sonra colorAnimation baslayacak
      Animated.timing(this.state.colorAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    //bg: background
    const bgColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#32CD32', '#C71585'],
    });
    const iconInterpolate = {
      backgroundColor: bgColorInterpolate, // sadece ikonun boyutlarinin buyumesini istiyorsaniz. backgroundColor: [0, 1] yapabilirsiniz.
      transform: [{scale: this.state.scaleAnimation}],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.iconContainer, iconInterpolate]}>
            <FAIcon size={25} name="music" color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// TouchableWithoutFeedback kullanma sebebimiz;
// Touchablepacity deki gibi bir tiklanma hissi vermemesi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('animations', () => animations);
