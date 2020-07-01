import { categoryService } from "./categoryService"

const getCategories = async () => {
  let categories = ["food", "house", "shop", "others"]
  await categoryService.getCategoriesService()
  .then(async res => {
    categories = await res.data.map(category => category.name)
  })
  .catch(err => console.log(err.response.data))
  return categories
}

export {
  getCategories
}