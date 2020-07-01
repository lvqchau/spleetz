import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'
import { accountService } from './accountService'

export class friendManagingService {
  initFriendService = async () => {
    const accountId = await AsyncStorage.getItem('userId')
    return axios({
      url: `${baseURL}/friends`,
      method: 'POST',
      data: { accountId }
    })
  }

  addFriendService = async (friendId) => {
    const accountId = await AsyncStorage.getItem('userId')
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
      method: 'PUT',
      url: `${baseURL}/friends/${friendshipId}`,
      data: {
        id: friendshipId,
        accountId,
        friends
      }
    })
  }
	
	searchFriendsService = async (filter) => {
		return axios({
			url: `${baseURL}/accounts?filter={"where":${JSON.stringify(filter)}}`,
			method: 'GET'
		})
	}
}

export const friendService = new friendManagingService();