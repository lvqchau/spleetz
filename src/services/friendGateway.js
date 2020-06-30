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

export {
  initFriend
}