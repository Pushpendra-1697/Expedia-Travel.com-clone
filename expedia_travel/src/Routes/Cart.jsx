import React, { useContext } from 'react';
import { removeFromCart } from '../Context/CartContext/action';
import { CardContext } from '../Context/CartContext/CartContextProvider';
import { Button, Box, Heading, Container, Image, Text } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  const { state, dispatch } = useContext(CardContext);
  const navigate = useNavigate();

  let total = 0;
  for (let i = 0; i < state.length; i++) {
    total += (state[i].price);
  };
  return (
    <>
      <Container m={"auto"} display="flex" justifyContent={"space-between"} mt="2%" mb={"2%"}>
        <Text fontSize={{ base: "19px", '2xl': "23px", xl: "23px", lg: "23px", sm: "20px" }} color="green">Total Quentity: <Icon color={"goldenrod"} as={BsFillCartPlusFill} /> {state.length}</Text>
        <Box fontSize={{ base: "19px", '2xl': "23px", xl: "23px", lg: "23px", sm: "20px" }} display={"flex"} color="red" gap="5px">Total Price: <Text color="green"> {`₹ ${total}`}
        </Text> </Box>
      </Container>
      <Box p='20px' mt={"5%"} mb="1%" display={"grid"} gridTemplateColumns={{ base: "repeat(1,1fr)", '2xl': 'repeat(3,1fr)', xl: 'repeat(3,1fr)', lg: "repeat(3,1fr)", sm: "repeat(2,1fr)" }} gap="20px">
        {state.length === 0 ? <Box display={'flex'} h={'50vh'} ml={{ base: '0%', '2xl': '20%', xl: '600px', lg: '400px', sm: '0%' }} justifyContent={'center'} alignItems={'center'}><BsFillCartXFill color={"goldenrod"} size={'200px'} /></Box> :
          state.map((ele) =>
            <Box key={ele.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" pb='5px'>
              <Image w="100%" height={"300px"} src={ele.image_url}></Image>
              <Heading fontFamily={"heading"} mt="10%" fontSize="18px">{ele.name}</Heading>
              <Box display={"flex"} justifyContent="space-around" m="10px">
                <Text m="10px 0" color={"green"}>{ele.location}</Text>
                <Text color={"yellow.900"} mb="10px">{`${ele.rating}/10`}</Text>
              </Box>
              <Box display={"flex"} justifyContent="space-around" mb={"5%"}>
                <Text>{ele.isStatus ? <Text color={"green"}>Available</Text> : <Text color={"red"}>Not Available</Text>}</Text>
                <Text color={"goldenrod"} fontFamily="inherit" fontSize={"21px"}>{`₹${ele.price}/night`}</Text>
              </Box>
              <Button fontSize={"25px"} color="red" variant={"outline"} m={"1%"} mb="3%" onClick={() => dispatch(removeFromCart(ele.id))}> <AiFillDelete /> </Button>
            </Box>
          )}
      </Box>
      <br></br>
      <br></br>
      <hr></hr>
      {state.length !== 0 && <Button variant={"outline"} color={"black"} bg="blue" m={"40px"} onClick={() => navigate('/success')}>CHECKOUT</Button>}
    </>
  );
}

export default Cart;