import { useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image, Heading, Input, Text, Spinner, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { BsFacebook, BsApple } from 'react-icons/bs';
import jwt_decode from "jwt-decode";
import { GrGoogle } from 'react-icons/gr';

function Login() {
  const [formData, setFormData] = useState('');
  const { isAuth, token, loginUser, email } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const FormRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  /*google login*/
  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential);
    loginUser(response.credential, userObject.name);
  };

  const handleGoogleLogin = () => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "514340861987-f7tbdfd063bbb72d0452dm5je7onj1vj.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.querySelector("#signInDiv"), {
      theme: "outline",
      size: "large",
    });
  };

  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData({ ...formData, [type]: value });
  }
  const handleLogin = (formData) => {
    return (
      fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    )
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    if (formData.email.includes("@") === false) {
      alert("Email should correct Formate");
      return;
    }
    if (formData.password.length < 5) {
      alert("Password should have atleast 5 characters");
      return;
    }

    handleLogin(formData).then((res) => res.json()).then((res) => {
      loginUser(res.token, formData.email);
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false);
    });
  };

  const OriginAdmin = {
    email: "pushpendra1697@gmail.com",
    password: "Push1697@",
  };
  if (isAuth && token === undefined && email === OriginAdmin.email && formData.password === OriginAdmin.password) {
    alert("You are Admin So You can Add any Product")
    return <Navigate to='/stays' />
  } else if (isAuth && token !== null) {
    return <Navigate to='/'></Navigate>
  }
  return (
    <Box>
      <Modal isOpen={!isAuth}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} color={"green"}>Sign in</ModalHeader>
          <ModalBody>
            <Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" alt=""></Image>
            <Heading m={"5%"} as={"h6"} fontSize="18px" fontFamily={"monospace"} color="pink.700">Save an average of 15% on thousands of hotels when you're signed in</Heading>
            <form onSubmit={onSubmit} ref={FormRef}>
              <div>
                <label>
                  <Input mb={"1%"} type="email" placeholder="Email address" onChange={handleChange} color="pink.700" />
                </label>
              </div>
              <div>
                <label>
                  <InputGroup size='md' mb={"1%"}>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      onChange={handleChange}
                      color="pink.700"
                    />
                    <InputRightElement width='4.5rem'>
                      <Button variant={"outline"} h='1.75rem' size='sm' onClick={handleClick} color="pink.700">
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </label>
              </div>
              <div>
                <Button variant={"outline"} m={" 0 40%"} type="submit" onClick={() => FormRef.current.reset()} color="black" bg="green.400">
                  Sign in
                </Button>
                {loading && <Spinner color="red.500" size="lg" />}
              </div>
            </form>

            <Text textAlign={"center"} m={"3% 0"}>----------or-----------</Text>
            <Box m={"5% 25%"} id="signInDiv" onClick={handleGoogleLogin}>Sign in with Google <Icon color={"red"} as={GrGoogle} /> </Box>

          </ModalBody>
          <Text textAlign={"center"}>Forget password?</Text>
          <Text textAlign={"center"}>Other ways to Sign in</Text>
          <Box display={"flex"} m={'1% 45%'} gap={'10%'}>
            <a href={"https://www.facebook.com/v11.0/dialog/oauth?response_type=code&client_id=131538103586818&response_mode=query&scope=public_profile%20email&state=HRxSJXsnuA7rBsHRoasUM_KcIoxWHmksKgR1kR_8uWQ&redirect_uri=https://www.expedia.co.in/eg-auth-svcs/api/v1/oauth2/callback/facebook-web"}> <Icon as={BsFacebook} />  </a>
            <a href="https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.expedia.ul.booking.release&response_mode=form_post&scope=name%20email&state=LGtepv0n7LheC8pkJHpEAFc8_XiakwwJok0DktVBvpE&nonce=5IF7zqWMaY2ous4jnv_Rz7LaJapPwMqlTBjlGMgie9M&redirect_uri=https://www.expedia.co.in/eg-auth-svcs/api/v1/oauth2/callback/apple-web&locale=en_GB"> <Icon as={BsApple}></Icon> </a>
          </Box>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default Login;
