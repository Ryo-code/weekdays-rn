//Import some code we need
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

//Create out component
class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>
        A day of the week
      </Text>
    )
  }
};


//Style our component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})


//Make this code available elsewhere
export default DayItem;
