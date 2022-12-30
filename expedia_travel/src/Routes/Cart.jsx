import React, { useContext } from 'react';
import { removeFromCart } from '../Context/CartContext/action';
import { CardContext } from '../Context/CartContext/CartContextProvider';
import { Button, Box, Heading, Container, Image, Text } from "@chakra-ui/react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Footer from '../Components/Footer';

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
      <Box mt={"5%"} mb="1%" display={"grid"} gridTemplateColumns={{base:"repeat(3,1fr)", sm:"repeat(2,1fr)", lg: "repeat(3,1fr)"}} gap="20px">
        {state && state.map((ele) =>
          <Box key={ele.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <Image w="100%" height={"300px"} borderRadius="10px" src={ele.image_url}></Image>
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
      <Button variant={"outline"} color={"black"} bg="blue" m={"40px"} onClick={() => navigate('/success')}>CHECKOUT</Button>

      <Footer />
    </>
  );
}

export default Cart;