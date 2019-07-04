export default function counter(state = {}, action) {
    switch (action.type) {
        case 'DETAIL_DATA':
        // console.log('reduce detail',action);
        
            // let ecommerces = action.ecommerce.filter((result) => {
            //     console.log('coba', action.id);
            //     if (result.id === action.id) {

            //         return ecommerces
            //     }
            // }
            //     // ( result.id == action.id )
            //     // )
            //     // return ecommerces
            // )
            return action

        default:
            return state
    }
}