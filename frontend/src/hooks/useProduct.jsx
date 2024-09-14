import {ProductContext} from '../context/ProductContext'
import { useContext } from 'react'

export const useProduct = () => {
  const context = useContext(ProductContext)

  if(!context) {
    throw Error('use ......')
  }

  return context
}