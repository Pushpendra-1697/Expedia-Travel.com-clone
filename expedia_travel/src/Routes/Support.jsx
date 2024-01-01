import React from 'react'
import { Box, Button, Container, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, Text, Image, InputLeftElement } from '@chakra-ui/react';
import { MdOutlineAccessibility, MdMobileScreenShare, MdNotificationAdd, MdOutlinedFlag } from 'react-icons/md';
import { FaFlagUsa } from 'react-icons/fa';
import { GiBrazilFlag, GiEuropeanFlag, GiSouthAfricaFlag, GiTusksFlag, GiCheckeredFlag } from 'react-icons/gi';
import { PhoneIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const Support = () => {
  return (
    <>
      <Heading mb={"10px"}>Customer Service</Heading>
      <Container m="auto">
        <InputGroup size='sm'>
          <InputLeftAddon children='https://' />
          <Input placeholder='Search' />
          <InputRightAddon children='.com' />
        </InputGroup>
      </Container>
      <Container display={"flex"} alignItems={'center'} gap="5%" m={"auto"} mt={'1%'}>
        <Heading color={"gray"} fontSize={{base:'20px', '2xl':'25px', xl:'25px', lg:'25px', sm:'23px'}}>We are here to help</Heading>
        <Button>Contact us</Button>
      </Container>
      <Container display={"flex"} flexDirection={{base:'column', '2xl':'row', xl:'row', lg:'row', sm:'column'}} gap="10px" m={"auto"} mt="4%">
        <Box>
          <Heading fontSize={"20px"} mb="5px">Browse Help Topics</Heading>
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" padding={"10px"}>
            <Text>Customer Service</Text>
            <Text>Change & Cancel</Text>
            <Text>Payment & Receipts</Text>
            <Text>Refunds</Text>
            <Text>Travel Documents</Text>
            <Text>Account Security</Text>
            <Text>Travel Alerts</Text>
            <Text>Expedia Rewards</Text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize={"20px"} mb="5px">Popular Topics</Heading>
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" padding={"8px"}>
            <Text>How we order your search results</Text>
            <hr></hr>
            <Text>‘Private host’ listings</Text>
            <hr></hr>
            <Text>Book a flight using an airline credit</Text>
            <hr></hr>
            <Text>Government travel alerts and warnings</Text>
            <hr></hr>
            <Text>Online flight check-in</Text>
            <hr></hr>
            <Text>Earn Expedia Rewards tier status</Text>
            <hr></hr>
            <Text>Earn and use your Expedia Rewards points</Text>
            <hr></hr>
            <Text>View and claim missing Expedia Rewards points</Text>
            <hr></hr>
            <Text>Conditions of carriage</Text>
            <hr></hr>
            <Text>Changes to Expedia Rewards</Text>
            <hr></hr>
          </Box>
        </Box>
      </Container>
      <Container>
        <Button m="5% 0">Add Your Property to Expedia</Button>
        <Box border={"3px solid blue"} padding="5px">
          <Heading fontSize={"20px"} textAlign={"center"}>Download the Expedia app</Heading>
          <Box display={"flex"} gap="20px" mt={"20px"}>
            <Image
              w={"20%"}
              borderRadius="10px"
              src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
              alt=""
            />
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
              />
              <Input type='tel' placeholder='Phone number' />
            </InputGroup>
            <Button bg="orange" color={"gray"}>Send</Button>
          </Box>
          <Box>
            <Text><Icon as={MdOutlineAccessibility} /> Access</Text>
            <Text><Icon as={MdMobileScreenShare} />cancellation</Text>
            <Text><Icon as={MdNotificationAdd} />Booking Notification</Text>
          </Box>
          <Box display={"flex"} gap="1%">
            <Text textAlign={"left"}>Or scan the QR code!</Text>
            <Image w="100px" src="https://a.travel-assets.com/mad-service/footer-legal-qr-codes/27.jpg" alt=""></Image>
            <Text mt={"5%"} fontSize={"8px"}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
          </Box>
        </Box>
      </Container>
      <Heading fontSize={"25px"} mt="3%" mb={"1%"}>Trip Planning ⬇️</Heading>
      <Box w="90%" m="auto">
        <Box display={"flex"} gap="5%">
          <Heading fontSize={"15px"}>International Destinations</Heading>
          <Box w={"100%"}>Check out Expedia's featured travel destinations, which gives you a full selection of hotels to suit any budget in the most popular destinations in India and the world at large. Find the hotel that is right for you using our star ratings, guest reviews, location maps & great discount rates. Singapore Hotels Hong Kong Hotels Kuala Lumpur Hotels Bangkok Hotels Pattaya Hotels Paris Hotels Bali Hotels Maldives Hotels Dubai Hotels New York Hotels London Hotels Mauritius Hotels Melbourne Hotels Sydney Hotels Las Vegas Hotels Koh Samui Hotels Krabi Hotels</Box>
        </Box>
        <hr></hr>
        <Box display={"flex"} gap="5%">
          <Heading fontSize={"15px"}>Domestic Destinations</Heading>
          <Box w={"100%"}>Travelling within India? Check out our most popular domestic travel destinations with great selection of hotel partners, hotel reviews and our best travel deals! Goa Hotels Ooty Hotels Mahabaleshwar Hotels Manali Hotels Shimla Hotels Mysore Hotels Mount Abu Hotels Lonavala Hotels Chennai Hotels New Delhi Hotels Bangalore Hotels Kolkata Hotels Jaipur Hotels Mumbai Hotels Agra Hotels Hyderabad Hotels Udaipur Hotels Pune Hotels</Box>
        </Box>
      </Box>
      <Heading fontSize={"25px"} m="1% 0">Global Sites</Heading>
      <Box mb="10px">
        <Icon ml={"10px"} as={FaFlagUsa} />
        <Icon ml={"10px"} as={GiBrazilFlag} />
        <Icon ml={"10px"} as={GiEuropeanFlag} />
        <Icon ml={"10px"} as={GiSouthAfricaFlag} />
        <Icon ml={"10px"} as={FaFlagUsa} />
        <Icon ml={"10px"} as={GiTusksFlag} />
        <Icon ml={"10px"} as={GiCheckeredFlag} />
        <Icon ml={"10px"} as={MdOutlinedFlag} />
      </Box>
    </>
  );
}

export default Support;