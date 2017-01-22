/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//IMPORT CODE WE NEED
import React, { Component } from 'react';
//import React from 'react';       //NOTE: These two lines of ES5 code
//var Component = React.Component; //are the same as the ES6 code above

//import './ReactotronConfig' //NOTE: This is for the "react-o-tron"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

//CREATE REACT COMPONENT
//NOTE: for explanation on "export default", see: http://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default
export default class weekdays2 extends Component {
  render() {
    console.log('See me in chrome!')

    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }

  days() { //a helper function
    const daysItems = [];
    for(let i = 0; i <7; i++){
      const day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems

  }
}



//STYLE THE REACT COMPONENT
const styles = StyleSheet.create({
  container: {
    flex: 1, //NOTE: "flex: 1" is like saying "height & width at 100%"
    flexDirection:'column', //NOTE: flex-direction defaults to "column" (but "row" makes justify-content now deal with x-axis & align-items becomes y-axis)... some things are only accessible to one or the other, so flex-direction can be very useful
    justifyContent: 'center', //NOTE: deals w\ y-axis
    alignItems: 'center', //NOTE: deals w\ x-axis
    // backgroundColor: '#F5FCFF',
  },
});


//SHOW THE REACT COMPONENT ON THE SCREEN
AppRegistry.registerComponent('weekdays2', () => weekdays2);
