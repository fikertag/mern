import {createContext, useReducer} from 'react'

export const ProductContext = createContext()

export const productReducer = (state, action) =>{
  switch (action.type) {
    case  'SET_PRODUCT':
      // console.log(action.payload)
      return {
        product: action.payload
      }
    case  'ADD_PRODUCT':
      return {
        product: [action.payload, ...state.Product]
      }
    case  'DELETE_PRODUCT':
      return {
        product: state.product.filter(product => product._id !== action.payload._id)
      }
      default:
    return state
  }
}

export const ProductContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer,{
    product: null
  })

  return(
    <ProductContext.Provider value={{...state, dispatch}}>
        { children } 
    </ProductContext.Provider>
  )
}
