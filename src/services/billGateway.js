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

export {
  createBill
}