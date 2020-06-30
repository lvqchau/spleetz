import React from 'react'
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Account.component.style.js'
import COLORS from '../../../../assets/colors'
import Avatar from '../../../../components/Avatar.js';
import Switcher from '../../../../components/Switcher'
import { logOut, getUser } from '../../../../services/accountGateway.js'
import AsyncStorage from '@react-native-community/async-storage';

class AccountScreen extends React.Component {

  constructor(props) {
		super(props)
		this.state = {
			user: {
				fullname: '',
				username: '',
				phone: '',
				avatarUrl: 'https://spleetz.s3-ap-southeast-1.amazonaws.com/image/default-avatar.png',
				onlineStatus: '',
				email: '',
				id: ''
			}
		}
  }

	async componentDidMount(){
		const userId = await AsyncStorage.getItem('userId')
		const user = await getUser(userId)
		this.setState({
			user: user
		})
	}

  _logOut = async () => {
    const userOut = await logOut()
    if (userOut.status) {
      this.props._authedUser(null, true)
    } else {
      console.log("popup login faild, retry")
    }
  }

  render() {
		const { navigation } = this.props
		const { user } = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.accountContainer}>
          {/* Info containing name, phone, email */}
          <View style={styles.infoContainer}>
            <View style={styles.topContainer}>
              <View style={styles.avatarContainer}>
                <Avatar size={90} style={{ marginRight: 25 }} key={user.avatarUrl} source={{uri: user.avatarUrl}} />
                <View>
                  <Text style={styles.fullName}>{user.fullname}</Text>
                  <Text style={styles.lightText}>{user.username}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
              >
                <AntDesign name="edit" size={24} color={COLORS.darkblue} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <AntDesign style={{ marginRight: 10 }} name="phone" size={20} color={COLORS.lightgray} />
              <Text style={styles.lightText}>{user.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign style={{ marginRight: 10 }} name="mail" size={20} color={COLORS.lightgray} />
              <Text style={styles.lightText}>{user.email}</Text>
            </View>
          </View>

          {/* Overview of Balance and Bills involved */}
          <View style={[styles.borderLight, styles.overviewContainer]}>
            <View style={styles.centeredText}>
              <Text style={styles.empText}>140.000</Text>
              <Text style={styles.lightText}>Balance</Text>
            </View>
            <View style={styles.middleBar} />
            <View style={styles.centeredText}>
              <Text style={styles.empText}>12</Text>
              <Text style={styles.lightText}>Bills</Text>
            </View>
          </View>

          {/* Options */}
          <View>
            <Text style={styles.accountOptions}>Account</Text>
            <TouchableHighlight
              style={styles.rowTouchContainer}
              underlayColor={'rgba(186,186,186,0.1)'}
              onPress={() => navigation.navigate('Statistics')}
            >
              <>
                <MaterialCommunityIcons name="wallet-outline" size={24} color={COLORS.aqua} />
                <Text style={styles.tagText}>Payment</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.rowTouchContainer}
              underlayColor={'rgba(186,186,186,0.1)'}
              onPress={() => navigation.navigate('Statistics')}
            >
              <>
                <AntDesign name="barschart" size={24} color={COLORS.aqua} />
                <Text style={styles.tagText}>Statistics</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.rowTouchContainer}
              underlayColor={'rgba(186,186,186,0.1)'}
              onPress={() => navigation.navigate('Friendlist')}
            >
              <>
                <MaterialCommunityIcons name="account-multiple-outline" size={24} color={COLORS.aqua} />
                <Text style={styles.tagText}>Friends</Text>
              </>
            </TouchableHighlight>
            
            <Text style={styles.accountOptions}>Settings</Text>
            {/* For push noti, reminder */}
            <View style={styles.notiContainer}>
              <View style={[styles.rowTouchContainer, styles.notiHolder]}>
                <MaterialCommunityIcons name="bell-outline" size={24} color={COLORS.aqua} />
                <Text style={styles.tagText}>Notifcations</Text>
              </View>
              <Switcher isEnabled={true}></Switcher>
            </View>
          </View>

          {/* Signout */}
          <View style={[styles.borderLight, { paddingVertical: 10, borderBottomWidth: 0 }]}>
            <TouchableHighlight
              style={{ flex: 1 }}
              underlayColor={'rgba(186,186,186,0.1)'}
              onPress={() => this._logOut()}
            >
              <View style={styles.rowTouchContainer}>
                <AntDesign name="logout" size={24} color={COLORS.salmon} />
                <Text style={[styles.tagText, styles.logoutText]}>Sign out</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default AccountScreen