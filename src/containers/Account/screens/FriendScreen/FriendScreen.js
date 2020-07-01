import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet, Dimensions, TextInput, FlatList, ScrollView } from 'react-native'
import HeaderNavigator from '../../components/HeaderNavigator'
import COLORS from '../../../../assets/colors';
import FriendItem from './FriendItem';
import { data } from './FriendData'
import SearchContainer from '../../../../components/SearchContainer';
import { getFriend } from '../../../../services/accountGateway'
import {searchFriend} from '../../../../services/friendGateway'

const { width, height } = Dimensions.get('window')

class FriendScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isFocused: false
    }
	}
	
	_getFriend = async () => {
		let friends = await getFriend()
		this.setState({ friendList: friends })
	}

	async componentDidMount() {
		const { navigation } = this.props
		this.focusListener = navigation.addListener('focus', async () => {
			await this._getFriend()
			console.log('Friend list: ', this.state.friendList)
		})
	}

  handleFocus = () => this.setState({isFocused: true})
  handleInput = async (searchText) => {
		this.setState({searchText, isPending: true})
		let searchData = []
		const where = {'or': [{'fullname': { 'like': `${searchText}`, 'options':'i' }}, {'username': { 'like': `${searchText}`, 'options':'i' }}, {'phone': { 'like': `${searchText}`, 'options':'i' }}]}
		searchData = await searchFriend(where)
		this.setState({
			searchData, isPending: false
		})
	}
	handleBlur = () => this.setState({isFocused: false})

  render() {
    const { navigation } = this.props
		const { searchText, isFocused, friendList } = this.state
    return (
      <SafeAreaView style={styles.friendlistContainer}>
        <HeaderNavigator navigation={navigation} name="Friendlist" color={COLORS.aqua} />
        {/* Search and Add friend */}
        <View style={styles.searchContainer}>
        <View style={{flex: 8}}>
					<TextInput style={styles.inputStyle} onChangeText={(text) => this.handleInput(text)} value={searchText}></TextInput>
        </View>
          <TouchableOpacity style={styles.textButton}>
              <Text style={styles.textAction}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* Friendlist */}
        <View style={styles.friendList}>
          <FlatList
          showsVerticalScrollIndicator={false}
          data={friendList}
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
		borderBottomWidth: 1,
		padding: 0,
		fontSize: 16
  },
  friendList: {
    flex: 1,
    paddingHorizontal: 25
  }
})

export default FriendScreen