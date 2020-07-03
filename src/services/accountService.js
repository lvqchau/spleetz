import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class accountManagingService {
  logInService = async (user) => {
    return await axios({
      url: `${baseURL}/accounts/login`,
      method: 'POST',
      data: user
    })
	}
	signUpService = async (user) => {
    return await axios({
      url: `${baseURL}/accounts`,
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
		return await axios({
			url: `${baseURL}/accounts/${userId}`,
			method: 'GET'
		})
	}
	updateUser = async (userId, user) => {
    const accessToken = await AsyncStorage.getItem('accessToken')
		return await axios({
			url: `${baseURL}/accounts/${userId}`,
			method: 'PATCH',
			data: user,
			headers: {
				Authorization: accessToken
			}
		})
	}
  getFriendService = async (accountId) => {
    return await axios({
			method: 'GET',
			url: `${baseURL}/accounts/${accountId}/friendship`,
		})
  }
  getUserInfoService = async (accountId) => {
    return await axios({
      method: 'GET',
      url: `${baseURL}/accounts/${accountId}`
    })
  }
}

export const accountService = new accountManagingService();