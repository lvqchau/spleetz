import { Platform } from "react-native"

// const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = Platform.OS === 'ios' ? 'http://localhost:3001/api' : 'http://10.0.2.2:3001/api'
export {
  baseURL
}