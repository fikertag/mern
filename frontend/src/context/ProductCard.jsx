import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import  {useProduct} from '../hooks/useProduct'


const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
  const { dispatch} = useProduct()
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${pid}`, {
        method:"delete",
        headers:{
          "content-Type":"application/json"
        }
      })
      const json = await response.json()

      if (response.ok) {
       await dispatch({type: 'DELETE_PRODUCT', payload: json.data}) 
      } } 
    fetchProduct()
		console.log(product)
	};
    
  return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
				</HStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
			</Modal>
		</Box>
	);
};
export default ProductCard;