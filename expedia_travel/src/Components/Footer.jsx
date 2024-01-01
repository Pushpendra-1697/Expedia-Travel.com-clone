import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box display={"flex"} flexDirection={{ base: 'column', sm: 'row', '2xl': 'row', xl: 'row', lg: 'row' }} justifyContent={"space-evenly"} m="2% 0" p='10px'>
                <Text fontSize={"25px"} fontFamily={"sans-serif"} color="blue.700"><Link to={"/expedia"}>expedia group</Link></Text>
                <Box textAlign={"left"} lineHeight={"35px"} color="blue" fontSize={{ base: "13px" }}>
                    <Text color="black">Company</Text>
                    <Text><Link to={"/about"}>About us</Link></Text>
                    <Text>Jobs</Text>
                    <Text>Lists of property</Text>
                    <Text>Partnership</Text>
                </Box>
                <Box textAlign={"left"} lineHeight={"35px"} color="blue" fontSize={{ base: "13px" }}>
                    <Text color="black">Explore</Text>
                    <Text>India travel guide</Text>
                    <Text>Hotels in India</Text>
                    <Text>Holiday rentals in India</Text>
                    <Text>Holiday packages in India</Text>
                    <Text>Domestic flights</Text>
                    <Text>Car hire in India</Text>
                    <Text>All accommodation types</Text>
                    <Text>Travel blog</Text>
                </Box>
                <Box textAlign={"left"} lineHeight={"35px"} color="blue" fontSize={{ base: "13px" }}>
                    <Text color="black">Policies</Text>
                    <Text>Privacy Statement</Text>
                    <Text>Terms of use</Text>
                    <Text>Vrbo terms and conditions</Text>
                </Box>
                <Box textAlign={"left"} lineHeight={"35px"} color="blue" fontSize={{ base: "13px" }}>
                    <Text color="black">Help</Text>
                    <Text><Link to={"/support"}>Support</Link></Text>
                    <Text>Change or cancel your booking</Text>
                    <Text>Refund process and timelines</Text>
                    <Text>Book a flight using an airline credit</Text>
                    <Text>International travel documents</Text>
                </Box>
            </Box>
            <hr></hr>
            <Box m={"2% 0"}>
                <Image m="auto" src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt=''></Image>
                <Text mt={"2%"} fontSize={{ base: "13px" }}>© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</Text>
            </Box>
        </>
    );
}

export default Footer;

