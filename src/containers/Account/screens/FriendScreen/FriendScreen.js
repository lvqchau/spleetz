import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet, Dimensions, TextInput, FlatList, ScrollView } from 'react-native'
import HeaderNavigator from '../../components/HeaderNavigator'
import COLORS from '../../../../assets/colors';
import FriendItem from './FriendItem';
import { data } from './FriendData'

const { width, height } = Dimensions.get('window')

class FriendScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isFocused: false
    }
  }

  handleFocus = () => this.setState({isFocused: true})
  handleInput = (searchText) => this.setState({searchText})
  handleBlur = () => this.setState({isFocused: false})

  render() {
    const { navigation } = this.props
    const { searchText, isFocused } = this.state
    return (
      <SafeAreaView style={styles.friendlistContainer}>
        <HeaderNavigator navigation={navigation} name="Friendlist" color={COLORS.aqua} />
        {/* Search and Add friend */}
        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.inputStyle, {
                borderBottomColor: isFocused
                ? COLORS.aqua
                : COLORS.lightgray
              }]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={searchText => this.handleInput(searchText)}
            value={searchText}
            placeholder="Search a friend's name"
          ></TextInput>
          <TouchableOpacity style={styles.textButton}>
              <Text style={styles.textAction}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Friendlist */}
        <View style={styles.friendList}>
          <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <FriendItem user={item} style={{marginVertical: 5}} />}
          keyExtractor={item => item.id}
        />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  friendlistContainer: {
    width,
    flex: 1
  },
  searchContainer: {
    marginHorizontal: 25,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textButton: {
    flex: 2,
    alignItems: 'center',
    fontWeight: '600'
  },
  textAction: {
    color: COLORS.aqua
  },
  inputStyle: { 
    fontFamily: 'Quicksand-SemiBold',
    padding: 10,
    borderBottomWidth: 1,
    flex: 8
  },
  friendList: {
    flex: 1,
    paddingHorizontal: 25
  }
})

export default FriendScreen