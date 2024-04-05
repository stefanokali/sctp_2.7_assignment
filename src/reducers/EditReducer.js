export const defaultEditProduct = {
    id: 0,
    count: 0,
    discount: 0,
    name: 0,
    price: 0,
    isEdit: false
  }
  


  export function editReducer(state, action) {
    switch (action.type) {
      case 'CHOOSE_PRODUCT': {
        return {...state, ...action.payload, isEdit: true}
      }
      case 'CHANGE_NAME': {
        return {...state, name: action.payload}
      }
      case 'CHANGE_COUNT': {
        return {...state, count: action.payload}
      }
      case 'CHANGE_PRICE': {
        return {...state, price: action.payload}
      }
      case 'CHANGE_DISCOUNT': {
        return {...state, discount: action.payload}
      }
      case 'CANCEL': {
        console.log(defaultEditProduct)
        return {defaultEditProduct}
      }
      default:
        throw Error('productReducer: unknown action:' + action.type);
    }
  }