import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Text, Image, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';
import './navbar.css';
import { CardContext } from '../Context/CartContext/CartContextProvider';
import { checkout } from '../Context/CartContext/action';

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

    const { isAuth, logoutUser, email } = useContext(AuthContext);
    const { dispatch } = useContext(CardContext);
    const handleLogout = () => {
        dispatch(checkout());
        logoutUser();
    };

    return (
        <Box style={{ position: "relative" }} display="flex" justifyContent="center" alignItems={"center"} mb={{ base: "20%", '2xl': '7%', xl: '7%', sm: "13%", lg: "7%" }}>
            <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" display={{ base: "flex", sm: "flex", lg: "none", xl: 'none', "2xl": 'none' }} position={"fixed"} top="0.1px" zIndex={"100"} bg="white" justifyContent="space-around" w="100%" padding={"10px"}>
                <Link className='icon' to={"/"}> <Image src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='' /> </Link>
                {isAuth ? <Text color={"green"}>❤️Welcome! {email}</Text> : null}
                <Button className='icon' onClick={onOpen}><GiHamburgerMenu /></Button>
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
                                        className='icon'
                                        key={ele.to}
                                        style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                                        to={ele.to}
                                        end
                                        onClick={onClose}
                                    >
                                        {ele.title}
                                    </NavLink>
                                )}
                            </Box>
                        </ModalBody>

                        <ModalFooter bg="blue.100">
                            <Button className='icon' colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>


            <Box display={{ base: "none", sm: 'none', lg: "flex" }} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" position={"fixed"} top="0.1px" zIndex={"100"} bg="white" justifyContent="space-around" w="100%" padding={"10px"}>
                <Link to={"/"}> <Image className='icon' display={{ base: "block", sm: "none", lg: "block" }} src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='' /> </Link>
                {/* <Link to={"/"}> <Image display={{ base: "block", sm: "none", lg: "block" }} w={"40px"} h={"40px"} src={logo} alt='logo' /> </Link> */}
                {links.map((ele) =>
                    <NavLink
                        className='icon'
                        key={ele.to}
                        style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                        to={ele.to}
                        end
                    >
                        {ele.title}
                    </NavLink>
                )}

                {isAuth ? <Button className='icon' variant={"outline"} bg="black" color={"red"} display={{ base: "block", sm: "none", lg: "block" }} border={"none"} onClick={handleLogout}>SignOut</Button> : null}
                {isAuth ? <Text className='icon' display={{ base: "block", sm: "none", lg: "block" }} color={"green"}>Welcome❤️{email}</Text> : null}
                <ReactSwitch className='icon' onChange={toggleTheme} checked={theme === "dark"} />
            </Box>
        </Box>
    );
}
export default Navbar;