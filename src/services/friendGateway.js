import { friendService } from "./friendService"
import AsyncStorage from "@react-native-community/async-storage"
import { getFriend, getFriendId } from "./accountGateway"

const initFriend = async () => {
	await friendService.initFriendService()
		.then(res => {
			console.log('yay, init friendlist')
		}).catch(err => {
			console.log('fail to init')
		})
}

const searchFriend = async (filter) => {
	let accountId = await AsyncStorage.getItem('userId')
	let searchedList = []
	let friendList = await getFriend()
	await friendService.searchFriendsService(filter)
		.then(async res => {
			searchedList = res.data.reduce(function (result, user) {
				let found = false
				friendList.forEach(friend => {
					if (user.id === friend.accountId) {
						found = true
					}
				})
				if (!found && accountId !== user.id) {
					result.push(user)
				}
				return result;
			}, []);
		}).catch(err => {
			console.log(err.response.data)
		})
	return searchedList
}

const addFriend = async (friendId) => {
	let friends = await getFriend()
	const accountId = await AsyncStorage.getItem('userId')
	let idx = friends.findIndex(friend => friend.accountId === friendId)
	if (idx === -1) {
		console.log(accountId, friendId)
		await friendService.addFriendService(accountId, friendId)
			.then(res => console.log("Add successfully"))
			.catch(err => console.log("Add failed"))
		await friendService.addFriendService(friendId, accountId)
			.then(res => console.log("Add successfully"))
			.catch(err => console.log("Add failed"))
	}
}

export {
	initFriend,
	searchFriend,
	addFriend
}