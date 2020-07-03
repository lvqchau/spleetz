import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'
import { accountService } from './accountService'

export class billManagingService {
  createBillService = async (bill) => {
    let newBill = {...bill}
    const accountId = await AsyncStorage.getItem('userId')
    let payer = {}
    await accountService.getUserInfoService(accountId)
    .then(res=> {
      payer = res.data
      delete payer.onlineStatus
      delete payer.createdAt
      delete payer.phone
      delete payer.email
    })
    .catch(err=>console.log(err.response.data))
    newBill.payerId = accountId
    newBill.payer = payer
    return await axios({
      url: `${baseURL}/bills`,
      method: 'POST',
      data: newBill
    })
  }

  getBillOfSelfService = async () => {
    const accountId = await AsyncStorage.getItem('userId')
    return await axios({
      url: `${baseURL}/bills?filter={"where": {"payerId": ${JSON.stringify(accountId)}}}`,
      method: 'GET'
    })
  }

  getBillService = async () => {
    return await axios({
      url: `${baseURL}/bills`,
      method: 'GET'
    })
  }

  getBillBorrowersService = async (billId) => {
    return await axios({
      url: `${baseURL}/bills/${billId}/borrower`,
      method: 'GET'
    })
  }
}

export const billService = new billManagingService();