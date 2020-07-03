import { billService } from "./billService"
import AsyncStorage from '@react-native-community/async-storage'
import { debtService } from "./debtDetailService"

const createBill = async (bill) => {
  let returnedBill = null
  await billService.createBillService(bill)
    .then(async (res) => {
      returnedBill = res.data
    })
		.catch(err => console.log(err.response.data.error.message))
  return returnedBill
}

const getBillsOfSelf = async () => {
  const accountId = await AsyncStorage.getItem('userId')
  let bills = await getBill()
  let myBills = []
  
  await bills.forEach(async bill => {
    let total = 0
    let allBorrowers = []
    let borrowers = []
    let payer = bill.payer
    let isPayer = false

    // TOTAL
    total = await bill.items.reduce((billTotal, item) => {
      if (item.price === 0 || item.quantity === 0) {
        billTotal += 0
      } else {
        billTotal += item.price * item.quantity
      }
      return billTotal
    }, 0)

    // BORROWERS
    bill.items.forEach(async item => {
      item.borrower.forEach(async person => {
        allBorrowers.push(person)
      })
    })

    borrowers = allBorrowers.filter((value, index, self) => self.indexOf(value) === index)
    
    // PUSH TO MYBILLS
    bill.items.forEach(async item => {
      let indexF = item.borrower.findIndex(person => person.accountId === accountId)
      if (indexF !== -1 || bill.payerId === accountId) {
        isPayer = true
      }
    })

    if (isPayer) {
      let myBill = { ...bill }
      delete myBill.payerId
      myBills.push({ ...myBill, payer, borrowers, total })
    }
  })
  return myBills.reverse()
}

const getBill = async () => {
  let bills = []
  await billService.getBillService()
    .then(async res => {
      bills = res.data
    })
    .catch(err => console.log("err.response.data"))
  return bills
}

const updateBillCount = async (debtCount, billId) => {
  await billService.updateBillCountService(debtCount, billId)
  .then(res => console.log('done'))
  .catch(err => console.log(err.response.data))
}

const acceptBill = async (billId, debtId) => {
  await Promise.all([debtService.updateStatusService(debtId), billService.getBillIdService(billId)])
  .then(async res => {
    bill = res[1].data
    await updateBillCount(bill.debtCount, bill.id)
  }).catch(errors => {
    console.log(errors)
  })
}

export {
  createBill,
  getBillsOfSelf,
  acceptBill
}