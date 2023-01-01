import React from "react";
import { Box, Button, Heading, Image, Text, Input } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Carousel1 from "./Carousel1";
import "./Carousel.css";

const Home = () => {
  return (
    <>
      <Box
        w={{ base: "80%", sm: "95%", lg: "80%" }}
        m={"auto"}
        borderRadius="10px"
        position={"relative"}
      >
        <Carousel1 />

        {/* <Box className="slideshow"></Box> */}
        <Box
          position={"absolute"}
          zIndex={"6"}
          top="40%"
          left={"5%"}
          textAlign={"left"}
          w={{ base: "30%", sm: "100%", lg: "30%" }}
          color="white"
          lineHeight={"20px"}
        >
          <Heading>Save instantly with Expedia Rewards</Heading>
          <Text>
            You can enjoy access to perks like Member Prices, saving an average
            of 15% on thousands of hotels. Terms may apply.
          </Text>
          <Button mt={"10px"} bg={"blue"} variant="outline" color={"green.500"}>
            See Member Prices
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        gap="3%"
        border={"1px solid brown"}
        w={{ base: "80%", sm: "95%", lg: "80%" }}
        m={"auto"}
        borderRadius="10px"
        mt="4%"
      >
        <Image
          borderRadius="10px"
          w={"30%"}
          src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
          alt=""
        />
        <Box w={{ base: "45%", sm: "60%", lg: "45%" }} p="20px 0">
          <Heading mb={"10px"} as={"h1"}>
            Our app takes you further
          </Heading>
          <Text fontSize="16px" lineHeight={"18px"}>
            When you book on the app you can save even more up to 20% on select
            hotels while earning double the points with every booking. With
            these app deals you'll save even more on trips, and that means you
            can take more trips, and manage it all on the go.
          </Text>
          <Heading
            display={{ base: "block", sm: "none", lg: "block" }}
            mt={"10px"}
            as="h6"
            fontSize={"18px"}
          >
            Text yourself a download link for easy access
          </Heading>
          <Box display={"flex"}>
            <Input
              display={{ base: "block", sm: "none", lg: "block" }}
              m={"2%"}
              placeholder="+91 Phone number"
              w="40%"
            ></Input>
            <Button
              m={{ base: "0%", sm: "5%", lg: "2% 0" }}
              bg={"blue"}
              color="black"
              variant={"outline"}
            >
              Switch to the app
            </Button>
          </Box>
          <Text
            display={{ base: "block", sm: "none", lg: "block" }}
            fontSize={"13px"}
          >
            By providing your number, you agree to receive a one-time automated
            text message with a link to get the app. Standard text message rates
            may apply.
          </Text>
        </Box>
        <Box w="30%" display={{ base: "block", sm: "none", lg: "block" }}>
          <Image
            m={"20% 30% 0 30%"}
            w="40%"
            src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png"
            alt=""
          />
          <Text>Scan the QR Code</Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap="3%"
        border={"1px solid brown"}
        w={{ base: "80%", sm: "95%", lg: "80%" }}
        m={"auto"}
        borderRadius="10px"
        mt="4%"
      >
        <Box>
          <Image
            w={"700px"}
            h={"250px"}
            borderRadius={"10px"}
            src="https://tpc.googlesyndication.com/simgad/4521068674532748792?"
            alt=""
          ></Image>
        </Box>
        <Box>
          <Image
            m={"12%"}
            src="https://tpc.googlesyndication.com/simgad/5197503855605148686?"
            alt=""
          ></Image>
          <Heading textAlign={"left"} fontSize={"23px"}>
            Discover USA
          </Heading>
          <Text mt={"2%"} fontSize={"13px"}>
            From beaches and national parks to iconic big cities, the USA awaits
            you.
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap="3%"
        border={"1px solid brown"}
        w={{ base: "80%", sm: "95%", lg: "80%" }}
        m={"auto"}
        borderRadius="10px"
        mt="4%"
      >
        <Image
          src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg"
          alt=""
          w="100%"
          h={"400px"}
          borderRadius={"10px"}
        />
      </Box>

      <Box m={{ base: "4% 0", sm: "6% 0", lg: "4% 0" }}>
        <Text>Explore a world of travel with Expedia</Text>
        <Text color={"blue"}>Discover new places and experiences</Text>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
