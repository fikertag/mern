import { Router } from "express";
import { createProducts, deleteproduct, getAllproducts, getSingleProduct, updateProduct} from '../controller/productController.js'

const route = Router()

route.post('/', createProducts )
route.get('/', getAllproducts )
route.get('/:id', getSingleProduct )
route.delete('/:id', deleteproduct )
route.patch('/:id', updateProduct )

export default route;
