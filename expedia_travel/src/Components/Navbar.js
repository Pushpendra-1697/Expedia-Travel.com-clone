import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Text, Image, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import logo from '../Images/E.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';

const links = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/users",
        title: "Users",
    },
    {
        to: "/login",
        title: "Login",
    },
    {
        to: "/flights",
        title: "Flights",
    },
    {
        to: "/stays",
        title: "Stays",
    },
    {
        to: "/cart",
        title: "Cart",
    }
];
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { theme, toggleTheme } = useContext(ThemeContext);

    let activeStyle = {
        textDecoration: "none",
        color: "red",
    };
    let normalStyle = {
        textDecoration: "none",
        color: "black",
    };

    const { isAuth, logoutUser, token, email } = useContext(AuthContext);
    return (
        <Box style={{ position: "relative" }} display="flex" justifyContent="center" alignItems={"center"} mb={{ base: "5%", sm: "13%", lg: "5%" }}>
            <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" display={{ base: "none", sm: "flex", lg: "none" }} position={"fixed"} top="0.1px" zIndex={"100"} bg="white" justifyContent="space-around" w="100%" padding={"10px"}>
                <Link to={"/"}> <Image src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='' /> </Link>
                {isAuth ? <Text color={"green"}>❤️Welcome! {email}</Text> : null}
                <Button onClick={onOpen}><GiHamburgerMenu /></Button>
            </Box>

            <Box>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody bg="blue.100">
                            <Box display={"flex"} justifyContent="center" flexDirection={"column"} alignItems="center" gap={"10px"}>
                                {links.map((ele) =>
                                    <NavLink
                                        key={ele.to}
                                        style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                                        to={ele.to}
                                        end
                                    >
                                        {ele.title}
                                    </NavLink>
                                )}
                            </Box>
                        </ModalBody>

                        <ModalFooter bg="blue.100">
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>


            <Box display={{ base: "flex", sm: 'none', lg: "flex" }} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" position={"fixed"} top="0.1px" zIndex={"100"} bg="white" justifyContent="space-around" w="100%" padding={"10px"}>
                <Link to={"/"}> <Image display={{ base: "block", sm: "none", lg: "block" }} src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='' /> </Link>
                {/* <Link to={"/"}> <Image display={{ base: "block", sm: "none", lg: "block" }} w={"40px"} h={"40px"} src={logo} alt='logo' /> </Link> */}
                <Text display={{ base: "block", sm: "none", lg: "block" }} color='green'>{token}</Text>
                {links.map((ele) =>
                    <NavLink
                        key={ele.to}
                        style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                        to={ele.to}
                        end
                    >
                        {ele.title}
                    </NavLink>
                )}

                {isAuth ? <Button variant={"outline"} bg="black" color={"red"} display={{ base: "block", sm: "none", lg: "block" }} border={"none"} onClick={logoutUser}>SignOut</Button> : null}
                {isAuth ? <Text display={{ base: "block", sm: "none", lg: "block" }} color={"green"}>Welcome❤️{email}</Text> : null}
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </Box>
        </Box>
    );
}
export default Navbar;