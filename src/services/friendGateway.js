import { friendService } from "./friendService"
import AsyncStorage from "@react-native-community/async-storage"

const initFriend = async () => {
  const accountId = await AsyncStorage.getItem('userId')
  await friendService.initFriendService(accountId)
  .then(res => {
    console.log('yay, init friendlist')
  }).catch(err => {
    console.log('fail to init')
  })
}

const searchFriend = async (filter) => {
	let friends = []
	await friendService.searchFriendsService(filter)
	.then(res => {
		friends = res.data
		console.log("Friends: ", friends)
	}).catch(err => {
		console.log(err.response.data)
	})
	return friends
}

export {
	initFriend,
	searchFriend
}