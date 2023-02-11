import axios from 'axios'


export const getProduct = async (category) => {
    try {
        const config = await axios.get(`https://fakestoreapi.com/products`)
        category(config.data)


    } catch (err) {
        throw 'Error :( en producto '
    }
}
