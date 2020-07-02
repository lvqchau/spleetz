import { billService } from "./billService"

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

const getBillOfSelf = async () => {
  await billService.getBillOfSelfService()
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
}

const getBillBorrowers = async () => {
  await billService.getBillBorrowersService()
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
}

const getBillList = async () => {
  
}

export {
  createBill,
  getBillOfSelf,
  getBillBorrowers
}