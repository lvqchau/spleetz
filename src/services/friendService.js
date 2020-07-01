import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'
import { accountService } from './accountService'

export class friendManagingService {
  initFriendService = (accountId) => {
    return axios({
      url: `${baseURL}/friends`,
      method: 'POST',
      data: { accountId }
    })
  }

  addFriendService = async (accountId, friendId) => {
    let friendshipId = null
    let friends = []
    await accountService.getFriendService(accountId).then(res => {
      friendshipId = res.data.id
      friends = res.data.friends
		}).catch(async err => {
			if (err.response.data.error.code === "MODEL_NOT_FOUND") {
        friendshipId = null
			}
    })
    
    if (!friendshipId) {
      await this.initFriendService(accountId).then(res => {
        friendshipId = res.data.id
        friends = []
			}).catch(err => {
				console.log('fail to init')
			})
    }

    friends.push({accountId: friendId})

    return axios({
      method: 'POST',
      url: `${baseURL}/accounts/${accountId}/friendship`,
      data: {
        id: friendshipId,
        accountId,
        friends
      }
    })
  }

  logOutService = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken')
    return axios({
      url: `${baseURL}/accounts/logout?access_token=${accessToken}`,
      method: 'POST'
    })
  }
}

export const friendService = new friendManagingService();