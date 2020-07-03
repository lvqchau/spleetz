import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'
import { accountService } from './accountService'

export class friendManagingService {
  initFriendService = async () => {
    const accountId = await AsyncStorage.getItem('userId')

    return await axios({
      url: `${baseURL}/friends`,
      method: 'POST',
      data: { accountId }
    })
  }

  addFriendService = async (accountId, friendId) => {
    // const accountId = await AsyncStorage.getItem('userId')
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

    friends.push({accountId: friendId})
    
    return await axios({
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