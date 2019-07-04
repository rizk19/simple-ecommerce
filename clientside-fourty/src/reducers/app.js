
export default function data(state = [], action) {
    switch (action.type) {
        case 'ADD_DATA':
            // console.log('this', state);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    rate: action.rate,
                    desc: action.desc,
                    price: action.price,
                    brand: action.brand,
                    detail: action.detail,
                    image: action.image,
                    sent: true
                }
            ]
        case 'LOAD_ECOMMERCE_SUCCESS':
        console.log('reduce load',action.ecommerce);
            
            return action.ecommerce
            // return ecommerces

        case 'LOAD_ECOMMERCE_FAILURE':
            return state

        case 'ADD_ECOMMERCE_SUCCESS':
            return state.map((item) => {
                item.sent = true
                return item
            })

        case 'ADD_ECOMMERCE_FAILURE':
            return state.map((item) => {
                // console.log('atasfail', action);
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            })

        default:
            return state
    }
}