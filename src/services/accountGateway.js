import { accountService } from "./accountService"
import AsyncStorage from "@react-native-community/async-storage"
import { initFriend } from "./friendGateway"

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
    })
    .catch(err => console.log(err.response.data.error.message))
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
  return { status }
}

const getFriendId = async () => {
  let accountId = await AsyncStorage.getItem('userId')
  let friendshipId = null
  await accountService.getFriendService(accountId)
  .then(async res => {
    friendshipId = await res.data.id
  }).catch(err => {
    if (err.response.data.error.code === "MODEL_NOT_FOUND") {
      friendshipId = null
    }
  })
  return friendshipId
}

const getUserInfo = async (accountId) => {
  let user = {}
  await accountService.getUserInfoService(accountId)
  .then(async res => {
    const {id, fullname, username, phone} = res.data
    user = {
      accountId: id, 
      fullname,
      username,
      phone
    }
  })
  .catch(err => console.log(err.response.data))
  return user
}

const getFriend = async () => {
  let myId = await AsyncStorage.getItem('userId')
  let friendList = []
  let friendshipId = await getFriendId()
  if (!friendshipId) {
    await initFriend()
    friendList = []
  } else {
    await accountService.getFriendService(myId)
    .then(async res => {
      friendList = res.data.friends
      for (let idx = 0; idx < friendList.length; idx++) {
        await accountService.getUserInfoService(friendList[idx].accountId)
        .then(res => {
          let user = {
            accountId: res.data.id,
            fullname: res.data.fullname,
            username: res.data.username,
            phone: res.data.phone,
            avatarUrl: res.data.avatarUrl
          }
          friendList[idx] = user
          console.log("")
        })
        .catch(err => console.log(err.response.data))
      }
    }).catch(err => {
      console.log(err.response.data)
    })
  }
  console.log("")
  return friendList
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
  getFriend,
  getFriendId,
	getUser,
	updateUser
}