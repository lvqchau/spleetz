import React, { Component } from 'react'
import Dialog, { DialogContent } from 'react-native-popup-dialog'
import { Button } from 'react-native'

class MyDialog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Show Dialog"
        onPress={() => {
          this.setState({ visible: true });
        }}
      />
      <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
      >
        <DialogContent>
          <Text>"hi there"</Text>
        </DialogContent>
      </Dialog>
    </View>
    );
  }
}

// const showDialog = (content, type = "") => {
//   let text = ''
//   switch (content) {
//     case "login":
//       if (type === true) {
//         text = "Log in successfully"
//       } else {

//       }
//     case "logout":
//       if (type === true) {

//       } else {

//       }
//     default:
//       text = content
//   }
// }