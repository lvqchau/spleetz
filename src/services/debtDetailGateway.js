import { debtService } from "./debtDetailService"

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
  await debtService.getDebtService()
    .then((res) => {
			returnedDebt = res.data
		})
		.catch(err => console.log(err.response.data.error.message))
	return returnedDebt
}

export {
  createDebtDetail,
  getDebt
}