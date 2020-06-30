import { accountService } from "./accountService"
import AsyncStorage from "@react-native-community/async-storage"

const logIn = async (user) => {
  let returnedUser = {
    userId: null, 
    accessToken: null
  }
  await accountService.logInService(user)
    .then(async (res) => {
      const { userId, id } = res.data
			await AsyncStorage.setItem('accessToken', id)
			await AsyncStorage.setItem('userId', userId)
      returnedUser.userId = userId
      returnedUser.accessToken = id
      console.log('yay', id)
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

const getUser = async (userId) => {
	let user = {}
	await accountService.getUser(userId)
	.then(async (res) => {
		user = res.data
		await AsyncStorage.setItem('user', JSON.stringify(user))
	})
	.catch(err=> console.log(err.response.data.error.message))
	return user
}

const updateUser = async (userId, user) => {
	await accountService.updateUser(userId, user)
	.then(async (res) => {
		user = res.data
	})
	.catch(err=> console.log(err.response.data.error.message))
	return user
}

export {
  logIn,
	logOut,
	getUser,
	updateUser
}