import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet, Dimensions, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import HeaderNavigator from '../../components/HeaderNavigator'
import COLORS from '../../../../assets/colors';
import FriendItem from './FriendItem';
import { data } from './FriendData'
import SearchContainer from '../../../../components/SearchContainer';
import { getFriend } from '../../../../services/accountGateway'
import { searchFriend, addFriend } from '../../../../services/friendGateway'
import LinearGradient from 'react-native-linear-gradient';
import FriendAdd from './FriendAdd';

const { width, height } = Dimensions.get('window')

class FriendScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isFocused: false,
      searchData: [],
      isPending: null,
      friendList: null,
      isAdding: false
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
    })
  }

  _addFriend = async (friendId) => {
    this.setState({isAdding: true})
    await addFriend(friendId)
    this._getFriend()
    const {searchText} = this.state
    let searchData = []
    const where = { 'or': [{ 'fullname': { 'like': `${searchText}`, 'options': 'i' } }, { 'username': { 'like': `${searchText}`, 'options': 'i' } }, { 'phone': { 'like': `${searchText}`, 'options': 'i' } }] }
    searchData = await searchFriend(where)
    this.setState({
      searchData, isAdding: false
    })
  }

  handleInput = async (searchText) => {
    if (searchText === '') {
      this.setState({searchText, searchData: null, isPending: null})
    } else {
      this.setState({ searchText, isPending: true })
      let searchData = []
      const where = { 'or': [{ 'fullname': { 'like': `${searchText}`, 'options': 'i' } }, { 'username': { 'like': `${searchText}`, 'options': 'i' } }, { 'phone': { 'like': `${searchText}`, 'options': 'i' } }] }
      searchData = await searchFriend(where)
      await this.setState({
        searchData, isPending: false
      })
    }
  }

  render() {
    const { navigation } = this.props
    const { searchText, friendList, isPending, searchData, isAdding } = this.state
    return (
      <SafeAreaView style={styles.friendlistContainer}>
        <HeaderNavigator navigation={navigation} name="Friendlist" color={COLORS.aqua} />
        {/* Search and Add friend */}
        <View style={styles.searchContainer}>
          <View style={{ flex: 8 }}>
            <TextInput placeholder={"Add by username/fullname/phone"} style={styles.inputStyle} onChangeText={(text) => this.handleInput(text)} value={searchText}></TextInput>
          </View>
        </View>
        {/* Searchlist */}

        {
          isPending === true ?
            <View style={styles.searchListContainer}>
              <Text style={styles.title}>Unadded User</Text>
              <ActivityIndicator size={25} color="#0000ff" />
            </View>
            : isPending === null ? <></>
              :
              <View style={styles.searchListContainer}>
                <Text style={styles.title}>Unadded User</Text>
                {
                  <View style={styles.searchList}>
                    {
                      searchData === null ?
                      <></> :
                      searchData.length === 0 ? 
                      <Text>No match found</Text>  
                      :
                      
                      <FlatList
                      showsVerticalScrollIndicator={false}
                      data={searchData}
                      renderItem={({ item }) => <FriendAdd isAdding={isAdding} addFriend={this._addFriend} user={item} style={{ marginVertical: 5 }} />}
                      keyExtractor={(item, index) => index}
                    />
                    }
                  </View>
                }
              </View>
        }
        {/* Friendlist */}
        <View style={styles.friendList}>
          <Text style={styles.title}>Your friends</Text>
          {
            friendList === null ? 
            <Text>Loading...</Text> :
            friendList.length === 0 ? 
            <Text>You have no friends, add some</Text>
            :
            <FlatList
            showsVerticalScrollIndicator={false}
            data={friendList}
            renderItem={({ item }) => <FriendItem user={item} style={{ marginVertical: 5 }} />}
            keyExtractor={(item, index) => item.id+index}
          />
          }
          
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
  title: {
    color: COLORS.lightgray,
    marginBottom: 5
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
  },
  searchListContainer: {
    paddingHorizontal: 25,
    marginBottom: 15,
    maxHeight: '42%',
    overflow: 'hidden'
  },
  searchList: {
    paddingBottom: 20
  }
})

export default FriendScreen