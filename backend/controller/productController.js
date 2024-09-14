import Product  from "../models/productModul.js"


export const createProducts = async (req,res)=>{
  const product = req.body; 

  if(!product.name|| !product.price || !product.image){
    return res.status(404).json({ massage: "plese fill all filds"})
  }

const newProduct = new Product(product)

try {
  await newProduct.save()
  res.status(200).json({sucsses: true, data: newProduct})
} catch (error) {
  res.status(501).json({error: error.massage})
}}


export const getAllproducts = async (req,res)=>{
  try {
    const all = await Product.find({})
    res.status(200).json({sucsses: true, data: all})
  } catch (error) {
    res.status(404).json({sucsses: false, error: error.massage})
  }}

export const getSingleProduct = async (req,res) => {
  try {
    const id = req.params.id
    const singleProduct = await Product.findOne({_id: id})
    res.status(200).json({sucsses: true, data: singleProduct})
  } catch (error) {
    res.status(404).json({sucsses: false, error: error.massage})
  }
}

export const deleteproduct = async (req,res) => {
  try {
    const id = req.params.id
    const deletedProduct = await Product.findOneAndDelete({_id: id})
    res.status(200).json({sucsses: true, data: deletedProduct})
  } catch (error) {
    res.status(404).json({sucsses: false, error: error.massage})
  }
}

export const updateProduct = async(req,res) => {
  const id = req.params.id
    const product = req.body; 
  try {
    
    const updateProduct = await Product.findByIdAndUpdate({_id: id}, product,{new: true})
    res.status(200).json({sucsses: true, data: updateProduct  })
  } catch (error) {
    res.status(404).json({sucsses: false, error: error.massage})
  }
}
