import request from 'superagent'
const axios = require("axios")

const SERVER_URL = 'http://localhost:3001/api/'

const minta = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000
})

export function addData(id, title, rate, desc, price, brand, detail) {
    return { type: 'ADD_DATA', id, title, rate, desc, price, brand, detail }
}

export function detailData(id, title, rate, desc, price, brand, detail, image) {
    // console.log('detail dalemmmm', id, title, rate, desc, price, brand, detail);

    return { type: 'DETAIL_DATA', id, title, rate, desc, price, brand, detail, image }
}

function addEcommerceFailure(id) {
    // console.log('action', id);
    return { type: 'ADD_ECOMMERCE_FAILURE', id }
}

function addEcommerceSuccess(ecommerce) {

    return { type: 'ADD_ECOMMERCE_SUCCESS', ecommerce }
}

export function addEcommerce(title, rate, desc, price, brand, detail, formData, config) {
    console.log('action formdata',title);
    
    let id = Date.now()
    return async dispatch => {
        try {
            dispatch(addData(id, title, rate, desc, price, brand, detail))

            let reqimage = await minta.post(`ecommerce/upload`, formData, config)
                    console.log('gambar image',reqimage);
                    let response = await request
                            .post(`${SERVER_URL}ecommerce`, { id: id, title: title, rate: rate, desc: desc, price: price, brand: brand, detail: detail, image: reqimage.data.image } )

                            dispatch(addEcommerceSuccess(response.data))
        } catch (error) {
            console.error(error)
            dispatch(addEcommerceFailure(id))

        }
                    
    }
}

export function loadEcommerce() {
    return dispatch => {
        return request
            .get(`${SERVER_URL}ecommerce`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                // console.log(res.body)
                if (err) {
                    console.error(err)
                    dispatch(loadEcommerceFailure())
                } else {
                    dispatch(loadEcommerceSuccess(res.body))
                }
            })
    }
}
function loadEcommerceFailure() {
    return { type: 'LOAD_ECOMMERCE_FAILURE' }
}

function loadEcommerceSuccess(ecommerce, id) {
    console.log('load', id);

    return { type: 'LOAD_ECOMMERCE_SUCCESS', ecommerce, id }
}
