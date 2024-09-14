import { useEffect} from "react"
import { Link } from 'react-router-dom';
import  {useProduct} from '../hooks/useProduct'
import {Container, Text, VStack, SimpleGrid} from '@chakra-ui/react'
import ProductCard from "../context/ProductCard"

const HomePage = () => {

  const {product, dispatch} = useProduct()

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_PRODUCT', payload: json.data}) 
      }
    } 
    fetchProduct()
   
  }, [dispatch])
  console.log(product)
  return (
    <Container maxW='container.xl' py={12}>

			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{ product && product.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{product && product.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
  )
}

export default HomePage;