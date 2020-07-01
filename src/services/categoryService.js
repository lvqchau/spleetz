import axios from './axios'
import { baseURL } from '../assets/constant/constant'

export class categoryManagingService {
  getCategoriesService = () => {
    return axios({
      url: `${baseURL}/categories`,
      method: 'GET'
    })
  }
}

export const categoryService = new categoryManagingService();