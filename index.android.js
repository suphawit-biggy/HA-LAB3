import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  ListView,
  Button,
  Alert,
  View
} from 'react-native';
import styles from './styles'

export default class Lab3 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };
  }

  styles = require('./styles');

  _onPressPush(event) {
  }

  _onPressPop(event) {
    Alert.alert(
      'Do you want to pop',
      '"text"',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.textinput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>

        <Button
          onPress = {this._onPressPush}
          title = "Push" 
          color = "green"/>
        
        <Button
          onPress = {this._onPressPop}
          title = "Pop" 
          color = "#841584"/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Lab3', () => Lab3);
