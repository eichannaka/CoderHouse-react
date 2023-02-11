import axios from 'axios'


export const getCategories = async (category = '') => {
    try {
      const config = {
          method: 'GET',
      }
      return await axios.get(`https://api.storerestapi.com/categories${category}`, config)
     
  } catch (err) {
      throw 'Error :('
  }

}