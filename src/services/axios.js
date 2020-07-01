import Axios from "axios"
import AsyncStorage from "@react-native-community/async-storage"
import { baseURL } from "../assets/constant/constant"

let accessToken = ""

const getToken = async () => {
  accessToken = await AsyncStorage.getItem('accessToken')
}

getToken()

export default axios = Axios.create({
  baseURL,
  headers: {
    Authorization: accessToken
  }
});