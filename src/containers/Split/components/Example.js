import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

class Example extends Component {
  render() {
    return (
      <View>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <Text>Hello world</Text>
        </RBSheet>
      </View>
    );
  }
}

export default Example;