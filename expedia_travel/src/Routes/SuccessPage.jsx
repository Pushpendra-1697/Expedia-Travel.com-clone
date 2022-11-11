import React, { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, Button, Container, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';

const SuccessPage = () => {
    const [formData, setFormData] = useState('');
    const [loading, setLoading] = useState(false);
    const FormRef = useRef();
    const [count, setCount] = useState(5);
    const ref = useRef(null);
    const navigate = useNavigate();
    const { email } = useContext(AuthContext);


    const handleChange = (e) => {
        const { type, value } = e.target;
        setFormData({ ...formData, [type]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        ref.current = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(ref.current);
                    if (formData.email === email) {
                        navigate("/");
                    } else {

                        alert("Sorry!😒 Please Fill Correct Email Address")
                        setCount(5);
                    }
                }
                return prev - 1;
            });
        }, 1000)
        return () => {
            clearInterval(ref.current);
        };
    };

    return (
        <Container>
            <Stack spacing={3}>
                <Alert status='success'>
                    <AlertIcon />
                    Successfully made the Purchases❤️
                </Alert>
                <Alert status='success'>
                    <AlertIcon />
                    You will Redirect in <Text color={"red"} m="0 5px" fontSize={"23px"} fontFamily="cursive">{count}</Text> seconds, Please Wait!
                </Alert>
            </Stack>

            <Container mt={"15%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" padding={"50px 20px"}>
                <form onSubmit={onSubmit} ref={FormRef}>
                    <div>
                        <label>
                            <Input color={"green"} w="300px" m={"1%"} type="email" placeholder="Email address" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <Input m={"1%"}
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                color={"green"} w="300px"
                            />
                        </label>
                    </div>
                    <div>
                        <Button color={"green"} m={" 0 40%"} type="submit" onClick={() => FormRef.current.reset()}>
                            {loading ? "Loading" : "CHECKOUT"}
                        </Button>
                        {loading && <Spinner color="red.500" size="lg" />}
                    </div>
                </form>
            </Container>
        </Container>
    );
}

export default SuccessPage;