import { debtService } from "./debtDetailService"
import AsyncStorage from '@react-native-community/async-storage'
import { getUserInfo, getFriend } from './accountGateway'
import { billService } from "./billService"
import { accountService } from "./accountService"

const createDebtDetail = async (debt) => {
  let returnedDebt = null
  await debtService.createDebtService(debt)
    .then(async (res) => {
      returnedDebt = res.data
    })
    .catch(err => console.log(err.response.data.error.message))
  return returnedDebt
}

const getDebt = async () => {
  let returnedDebt = null
  // const userId = await AsyncStorage.getItem('userId')
  await debtService.getDebtService()
    .then((res) => {
      returnedDebt = res.data
    })
    .catch(err => console.log(err.response.data.error.message))
  return returnedDebt
}


const getAll = async () => {
  const userId = await AsyncStorage.getItem('userId')
  let myBills = []
  let myDebts = []
  let myFriends = []

  await Promise.all([billService.getBillOfSelfService(), debtService.getDebtService(), accountService.getFriendService(userId)])
  .then(async res => {
    myBills = res[0].data
    myDebts = res[1].data
    myFriends = await getFriend()
  }).catch(errors => {
    console.log('err')
  })
  return { 
    debt: myDebts.reverse(),
    bill: myBills.reverse(),
    friend: myFriends,
    userId
  }
}

export {
  createDebtDetail,
  getDebt,
  getAll
}