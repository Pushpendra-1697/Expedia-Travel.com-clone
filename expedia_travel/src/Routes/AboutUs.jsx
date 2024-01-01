import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box p={'10px'}>
      <Container textAlign={"left"} borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" p={"10px"}>
        <Heading fontSize={"23px"} fontFamily="fantasy">About Us</Heading>
        <Text fontSize="14px" mb={"10%"}>Last revised on 1 September 2022</Text>
        <Text fontSize="13px">Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates. With over hundreds of thousands of hotel partners worldwide and a comprehensive offering of flight inventory made available on the website, travellers can book everything they need for a holiday - rooms to meet every budget, activities of every kind and travel services to complement.</Text>
        <Text fontSize="14px" m={"4% 0"}>This website is operated by Expedia, Inc., with its head office at 111 Expedia Group Way W, Seattle, WA98119, USA.</Text>
        <Text fontSize="14px" m={"4% 0"}>Expedia, Inc. is a registered Seller of Travel in the State of Washington USA, Licence No. 601975803.</Text>
        <Text fontSize="14px" m={"4% 0"}>Expedia, Inc. is part of the Expedia Group of companies.</Text>
      </Container>
    </Box>
  )
}

export default AboutUs;