import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class debtManagingService {
  createDebtService = async (debt) => {
    let newDebt = {...debt}
    const userId = await AsyncStorage.getItem('userId')
		newDebt.payerId = userId
		let date = new Date()
		newDebt.startDate = date
		date.setDate(date.getDate() + 7)
		newDebt.remindDate = date
    return await axios({
      url: `${baseURL}/debts`,
      method: 'POST',
      data: newDebt
    })
  }
  
  getDebtService = async () => {
    return await axios({
      method: 'GET',
      url: `${baseURL}/debts`
    })
  }
}

export const debtService = new debtManagingService();