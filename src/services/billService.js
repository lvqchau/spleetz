import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class billManagingService {
  createBillService = async (bill) => {
    let newBill = {...bill}
    const userId = await AsyncStorage.getItem('userId')
    newBill.payerId = userId
    return axios({
      url: `${baseURL}/bills`,
      method: 'POST',
      data: newBill
    })
  }
}

export const billService = new billManagingService();