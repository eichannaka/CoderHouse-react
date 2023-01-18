import axios from 'axios'

export const getPhotos = async (photoId) => {

    // Esto no deberia estar aca.
    const API_KEY = '563492ad6f91700001000001da57a8b58cdf461db869dc707782ceef'

    try {
        const config = {
            method: 'GET',
            headers: {
                Authorization: API_KEY
            },
        }
        return await axios.get(`https://api.pexels.com/v1/${photoId ? `photos/${photoId}` : `curated?page=2&per_page=40`}`, config)

    } catch (err) {
        throw 'Error :('
    }
}
