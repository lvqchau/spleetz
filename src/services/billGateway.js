import { billService } from "./billService"
import AsyncStorage from '@react-native-community/async-storage'

const createBill = async (bill) => {
  let returnedBill = null
  await billService.createBillService(bill)
    .then(async (res) => {
      returnedBill = res.data
      console.log(returnedBill)
    })
    .catch(err => console.log(err.response.data.error.message))
  return returnedBill
}

const getBillsOfSelf = async () => {
  const accountId = await AsyncStorage.getItem('userId')
  let bills = await getBill()
  let myBills = []
  bills.forEach(bill => {
    bill.items.forEach(item => {
      let indexF = item.borrower.findIndex(person => person.accountId === accountId)
      if (indexF !== -1 || bill.payerId === accountId) {
        myBills.push(bill)
      }
    })
  })
  console.log('myBills', myBills)
  return myBills
}

const getBill = async () => {
  let bills = []
  await billService.getBillService()
    .then(async res => {
      // console.log(res.data)
      bills = res.data
    })
    .catch(err => console.log("err.response.data"))
  return bills
}

export {
  createBill,
  getBillsOfSelf
}