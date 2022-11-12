import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Text, Image, Button, Box } from '@chakra-ui/react';
import logo from '../Images/E.png';
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
    let activeStyle = {
        textDecoration: "none",
        color: "red",
    };
    let normalStyle = {
        textDecoration: "none",
        color: "black",
    };

    const { isAuth, logoutUser, token } = useContext(AuthContext);
    return (
        <Box style={{ display: "flex", gap: "3rem", justifyContent: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "20px", marginBottom: "5%" }}>
            <Link to={"/"}> <Image display={{ base: "block", sm: "none", lg: "block" }} src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='' /> </Link>
            <Link to={"/"}> <Image display={{ base: "block", sm: "none", lg: "block" }} w={"40px"} h={"40px"} src={logo} alt='logo' /> </Link>
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

            {isAuth ? <Button display={{ base: "block", sm: "none", lg: "block" }} border={"none"} onClick={logoutUser}>SignOut</Button> : null}
            {isAuth ? <Text display={{ base: "block", sm: "none", lg: "block" }} color={"green"}>Hi!❤️ Welcome Pushpendra Singh</Text> : null}
        </Box>
    );
}
export default Navbar;