import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class accountManagingService {
  logInService = (user) => {
    return axios({
      url: `${baseURL}/accounts/login`,
      method: 'POST',
      data: user
    })
  }
  logOutService = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken')
    return axios({
      url: `${baseURL}/accounts/logout?access_token=${accessToken}`,
      method: 'POST'
    })
	}
	getUser = async (userId) => {
		return axios({
			url: `${baseURL}/accounts/${userId}`,
			method: 'GET'
		})
	}
	updateUser = async(userId, user) => {
    const accessToken = await AsyncStorage.getItem('accessToken')
		return axios({
			url: `${baseURL}/accounts/${userId}`,
			method: 'PATCH',
			data: user,
			headers: {
				Authorization: accessToken
			}
		})
	}
  getFriendService = (accountId) => {
    return axios({
			method: 'GET',
			url: `${baseURL}/accounts/${accountId}/friendship`,
		})
  }
  getUserInfoService = (accountId) => {
    return axios({
      method: 'GET',
      url: `${baseURL}/accounts/${accountId}`
    })
  }
}

export const accountService = new accountManagingService();