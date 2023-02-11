import axios from 'axios'

export const getPhotos = async (productSlug, page = 1, limit = 10) => {

    // Esto no deberia estar aca.
    // const API_KEY = '563492ad6f91700001000001da57a8b58cdf461db869dc707782ceef'

    try {
        const config = {
            method: 'GET',
            // headers: {
            //     Authorization: API_KEY
            // },
        }
        return await axios.get(`https://api.storerestapi.com/products${productSlug ? `/${productSlug}` : `?limit=${limit}&page=${page}`}`, config)
       
    } catch (err) {
        throw 'Error :('
    }

}
