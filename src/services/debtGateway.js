import { billService } from "./billService"
import { debtService } from "./debtService"

const getDebt = async () => {
  await debtService.getDebtService()
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data))
}

export {
  getDebt
}