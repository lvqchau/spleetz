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
      console.log(returnedDebt)
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

const mount = (userId) => {
  // axios.all([this.getAllTicketGroups(), this.getEventId()])
  //     .then(axios.spread(function (list, got){
  //        console.log(list);
  //        console.log(got);
  //     }));
  Promise.all([billService.getBillOfSelfService(), debtService.getDebtService(), accountService.getFriendService(userId)])
  .then(results => {
    // Use the data from the results like so:
    console.log(results[0].data)
    console.log(results[1].data)
  }).catch(errors => {
    // react on errors.
    console.log('hi there')
  })
}

const getAll = async () => {
  // const myBills = await getBillsOfSelf()
  // 	const myDebts = await getDebt()
  // 	const myFriends = await getFriend()
  const userId = await AsyncStorage.getItem('userId')
  let myBills = []
  let myDebts = []
  let myFriends = []



  await Promise.all([billService.getBillOfSelfService(), debtService.getDebtService(), accountService.getFriendService(userId)])
  .then(async res => {
    // Use the data from the results like so:
    myBills = res[0].data
    myDebts = res[1].data
    myFriends = await getFriend()
  }).catch(errors => {
    // react on errors.
    console.log('err')
  })
  return { 
    debt: myDebts,
    bill: myBills,
    friend: myFriends,
    userId
  }
}

export {
  createDebtDetail,
  getDebt,
  getAll
}