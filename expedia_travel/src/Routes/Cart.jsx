import React, { useContext } from 'react';
import { removeFromCart } from '../Context/CartContext/action';
import { CardContext } from '../Context/CartContext/CartContextProvider';
import { Button, Box, Heading, Container, Image, Text } from "@chakra-ui/react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useContext(CardContext);
  const navigate = useNavigate();

  let total = 0;
  for (let i = 0; i < state.length; i++) {
    total += (state[i].price);
  }
  return (
    <>
      <Container m={"auto"} display="flex" justifyContent={"space-between"} mt="2%" mb={"2%"}>
        <Text fontSize={"23px"} color="green">Total Quentity: <Icon color={"goldenrod"} as={BsFillCartPlusFill} /> {state.length}</Text>
        <Box fontSize={"23px"} display={"flex"} color="red" gap="5px">Total Price: <Text fontSize={"27px"} color="green">
          {`₹ ${total}`}</Text> </Box>
      </Container>
      <Container mt={"5%"} mb="10%" w={"100%"} display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} gap="10%">
        {state && state.map((ele) =>
          <Box key={ele.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <Image w={"100%"} h="200px" borderRadius="10px" src={ele.image_url}></Image>
            <Heading fontFamily={"heading"} mt="10%" fontSize="18px">{ele.name}</Heading>
            <Text m="10px 0" color={"green"}>{ele.location}</Text>
            <Text color={"yellow.900"} mb="10px">{`${ele.rating}/10`}</Text>
            <Box display={"flex"} justifyContent="space-around" mb={"10%"}>
              <Text>{ele.isStatus ? <Text color={"green"}>Available</Text> : <Text color={"red"}>Not Available</Text>}</Text>
              <Text color={"goldenrod"} fontFamily="inherit" fontSize={"21px"}>{`₹${ele.price}/night`}</Text>
            </Box>
            <Button m={"1%"} mb="3%" onClick={() => dispatch(removeFromCart(ele.id))}>Remove From Cart</Button>
          </Box>
        )}
      </Container>
      <br></br>
      <br></br>
      <hr></hr>
      <Button color={"black"} bg="blue" m={"40px"} onClick={()=> navigate('/success')}>CHECKOUT</Button>
    </>
  );
}

export default Cart;