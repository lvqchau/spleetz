import { accountService } from "./accountService"
import AsyncStorage from "@react-native-community/async-storage"

const logIn = async (user) => {
  let returnedUser = {
    userId: '', 
    accessToken: ''
  }
  await accountService.logInService(user)
    .then(async (res) => {
      const { userId, id } = res.data
      await AsyncStorage.setItem('accessToken', id)
      returnedUser.userId = userId
      returnedUser.accessToken = id
    })
    .catch(err=> console.log(err.response.data.error.message))
  return returnedUser
}

const logOut = async () => {
  let status = false
  await accountService.logOutService()
  .then(res => {
    console.log('you have logged out')
    status = true
  })
  .catch(err => {
    console.log('error in logging out')
    status = false
  })
  console.log(status)
  return { status }
}

export {
  logIn,
  logOut
}