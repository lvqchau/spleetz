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
		let newDate = new Date(date)
		newDate.setDate(date.getDate() + 7)
		newDebt.returnDate = newDate
    return await axios({
      url: `${baseURL}/debts`,
      method: 'POST',
      data: newDebt
    })
	}
	
  getDebtService = async () => {
	const userId = await AsyncStorage.getItem('userId')
	const where = { 'or': [{ 'payerId': userId}, { 'borrowerId': userId} ] }
    return await  axios({
      method: 'GET',
      url: `${baseURL}/debts?filter={"where":${JSON.stringify(where)}}`
    })
	}
}

export const debtService = new debtManagingService();