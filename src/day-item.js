//Import some code we need
import React, { Component } from 'react';
import { Text } from 'react-native';

//Create out component
class DayItem extends Component {

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  color() {
    let opacity = this.props.daysUntil == 0 ? 1 : 1 / (this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, ' + opacity +')';
  }
  fontWeight() {
    let weight = 7 - this.props.daysUntil;
    return (weight * 100).toString()
  }
  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }
  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }

  render() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }
};

//Make this code available elsewhere
export default DayItem;
