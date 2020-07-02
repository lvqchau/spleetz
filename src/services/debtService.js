import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class debtManagingService {
  getDebtService = async () => {
    return axios({
      method: 'GET',
      url: `${baseURL}/debts`
    })
  }
}

export const debtService = new debtManagingService();